'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import * as styles from '../AdminPage.css';

// RichTextEditor를 dynamic import (SSR 이슈 방지)
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

type Category = '이마축소' | '흉터&재수술' | '헤어라인(남성)' | '헤어라인(여성)' | '정수리';

interface BeforeAfterItem {
  _id?: string;
  id: number;
  category: Category;
  title?: string;
  titleJp?: string;
  description?: string;
  descriptionJp?: string;
  beforeImage: string;
  afterImage: string;
  order: number;
}

type PopupPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface PopupItem {
  _id?: string;
  id: number;
  title: string;
  titleJp?: string;
  content?: string;
  contentJp?: string;
  imageUrl?: string;
  isActive: boolean;
  order: number;
  position: PopupPosition;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'before-after' | 'popup'>('before-after');

  // 인증 체크
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/before-after');
        const data = await response.json();

        if (!data.success && response.status === 401) {
          // 인증 실패 - 로그인 페이지로
          router.push('/admin/login');
          return;
        }

        setLoading(false);
      } catch (error) {
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    // 쿠키 삭제
    document.cookie = 'admin_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className={styles.adminPage}>
        <div className={styles.container}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>바람부는날에도 관리자</h1>
          <button className={styles.logoutButton} onClick={handleLogout}>
            로그아웃
          </button>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'before-after' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('before-after')}
          >
            수술 전후 관리
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'popup' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('popup')}
          >
            팝업 관리
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'before-after' ? <BeforeAfterManagement /> : <PopupManagement />}
        </div>
      </div>
    </div>
  );
}

// 수술 전후 관리 컴포넌트
function BeforeAfterManagement() {
  const [items, setItems] = useState<BeforeAfterItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<BeforeAfterItem | null>(null);
  const [showMigration, setShowMigration] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('이마축소');

  const categories: Category[] = ['이마축소', '흉터&재수술', '헤어라인(남성)', '헤어라인(여성)', '정수리'];

  useEffect(() => {
    fetchItems();
  }, [selectedCategory]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/before-after?category=${encodeURIComponent(selectedCategory)}`);
      const data = await response.json();
      if (data.success) {
        setItems(data.data);
      }
    } catch (error) {
      console.error('데이터 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMigrate = async () => {
    if (!confirm('기존 데이터를 모두 삭제하고 새로 마이그레이션하시겠습니까?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/migrate', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        console.log('=== 마이그레이션 결과 ===');
        console.log('총 개수:', data.count);
        console.log('카테고리별 개수:', data.breakdown);
        console.log('샘플:', data.samples);

        alert(
          `${data.message}\n\n` +
            `카테고리별 개수:\n` +
            `- 이마축소: ${data.breakdown.이마축소}개\n` +
            `- 흉터&재수술: ${data.breakdown['흉터&재수술']}개\n` +
            `- 헤어라인(남성): ${data.breakdown['헤어라인(남성)']}개\n` +
            `- 헤어라인(여성): ${data.breakdown['헤어라인(여성)']}개\n` +
            `- 정수리: ${data.breakdown.정수리}개\n\n` +
            `일본어 번역: ${data.samples?.withTitleJp || 0}/${data.samples?.withTitle || 0}개`,
        );
        fetchItems();
        setShowMigration(false);
      } else {
        alert('마이그레이션 실패: ' + data.error);
      }
    } catch (error) {
      alert('마이그레이션 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/before-after?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('삭제되었습니다.');
        fetchItems();
      } else {
        alert('삭제 실패: ' + data.error);
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const handleEdit = (item: BeforeAfterItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingItem({
      id: 0,
      category: selectedCategory,
      title: '',
      titleJp: '',
      description: '',
      descriptionJp: '',
      beforeImage: '',
      afterImage: '',
      order: items.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  if (showMigration) {
    return (
      <>
        <button className={styles.addButton} onClick={() => setShowMigration(false)}>
          ← 목록으로 돌아가기
        </button>
        <h2>데이터 마이그레이션</h2>
        <p style={{ marginTop: '16px', marginBottom: '24px' }}>
          현재 코드에 하드코딩된 데이터를 MongoDB에 마이그레이션합니다.
          <br />
          <strong>주의:</strong> 기존 데이터가 모두 삭제되고 새로 생성됩니다.
        </p>
        <button className={styles.submitButton} onClick={handleMigrate} disabled={loading}>
          {loading ? '마이그레이션 중...' : '마이그레이션 실행'}
        </button>
      </>
    );
  }

  return (
    <>
      {/* 카테고리 탭 */}
      <div className={styles.categoryTabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryTab} ${selectedCategory === category ? styles.activeCategoryTab : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', marginTop: '24px' }}>
        <button className={styles.addButton} onClick={handleAdd}>
          + 새 케이스 추가
        </button>
        <button
          className={styles.addButton}
          style={{ backgroundColor: '#14AEFF' }}
          onClick={() => setShowMigration(true)}
        >
          데이터 마이그레이션
        </button>
      </div>

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>제목(한국어)</th>
                <th className={styles.th}>제목(일본어)</th>
                <th className={styles.th}>Before</th>
                <th className={styles.th}>After</th>
                <th className={styles.th}>순서</th>
                <th className={styles.th}>작업</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={7} className={styles.td} style={{ textAlign: 'center', padding: '40px' }}>
                    데이터가 없습니다.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.td}>{item.id}</td>
                    <td className={styles.td}>{item.title || '-'}</td>
                    <td className={styles.td}>{item.titleJp || '-'}</td>
                    <td className={styles.td}>
                      <img src={item.beforeImage} alt="Before" className={styles.imagePreview} />
                    </td>
                    <td className={styles.td}>
                      <img src={item.afterImage} alt="After" className={styles.imagePreview} />
                    </td>
                    <td className={styles.td}>{item.order}</td>
                    <td className={styles.td}>
                      <div className={styles.actionButtons}>
                        <button className={styles.editButton} onClick={() => handleEdit(item)}>
                          수정
                        </button>
                        <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <BeforeAfterModal item={editingItem} onClose={handleCloseModal} onSuccess={fetchItems} />
      )}
    </>
  );
}

// 수술 전후 모달
function BeforeAfterModal({
  item,
  onClose,
  onSuccess,
}: {
  item: BeforeAfterItem | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<Partial<BeforeAfterItem>>(item || {});
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState<string | null>(item?.beforeImage || null);
  const [afterPreview, setAfterPreview] = useState<string | null>(item?.afterImage || null);
  const [uploading, setUploading] = useState(false);

  // Before 이미지 파일 선택 시 미리보기
  const handleBeforeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBeforeFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBeforePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // After 이미지 파일 선택 시 미리보기
  const handleAfterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAfterFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAfterPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Before 이미지 제거
  const handleRemoveBeforeImage = () => {
    setBeforeFile(null);
    setBeforePreview(null);
    setFormData({ ...formData, beforeImage: '' });
  };

  // After 이미지 제거
  const handleRemoveAfterImage = () => {
    setAfterFile(null);
    setAfterPreview(null);
    setFormData({ ...formData, afterImage: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 새 케이스 추가 시 이미지 필수 체크
    if (!item) {
      if (!beforeFile && !formData.beforeImage) {
        alert('Before 이미지를 업로드해주세요.');
        return;
      }
      if (!afterFile && !formData.afterImage) {
        alert('After 이미지를 업로드해주세요.');
        return;
      }
    }

    setUploading(true);

    try {
      let beforeImagePath = formData.beforeImage;
      let afterImagePath = formData.afterImage;

      if (beforeFile) {
        const formDataFile = new FormData();
        formDataFile.append('file', beforeFile);
        formDataFile.append('category', formData.category!);

        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formDataFile,
        });

        const data = await response.json();
        if (data.success) {
          beforeImagePath = data.path;
        }
      }

      if (afterFile) {
        const formDataFile = new FormData();
        formDataFile.append('file', afterFile);
        formDataFile.append('category', formData.category!);

        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formDataFile,
        });

        const data = await response.json();
        if (data.success) {
          afterImagePath = data.path;
        }
      }

      const method = item && item.id ? 'PUT' : 'POST';

      // 새 케이스 추가 시에는 id 제외
      const body: any = {
        category: formData.category,
        title: formData.title,
        titleJp: formData.titleJp,
        description: formData.description,
        descriptionJp: formData.descriptionJp,
        beforeImage: beforeImagePath,
        afterImage: afterImagePath,
        order: formData.order,
      };

      // 수정 시에만 id 포함
      if (item && item.id) {
        body.id = item.id;
      }

      const response = await fetch('/api/admin/before-after', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        alert(item && item.id ? '수정되었습니다.' : '추가되었습니다.');
        onSuccess();
        onClose();
      } else {
        alert('실패: ' + data.error);
      }
    } catch (error) {
      alert('오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{item ? '케이스 수정' : '새 케이스 추가'}</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>카테고리</label>
            <input
              type="text"
              className={styles.input}
              value={formData.category || ''}
              disabled
              style={{ backgroundColor: '#F5F5F5', cursor: 'not-allowed' }}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>제목 (한국어)</label>
            <input
              type="text"
              className={styles.input}
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="예: 2800모(남)_1년경과"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>제목 (일본어)</label>
            <input
              type="text"
              className={styles.input}
              value={formData.titleJp || ''}
              onChange={(e) => setFormData({ ...formData, titleJp: e.target.value })}
              placeholder="예: 2800毛（男）＿1年経過"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>설명 (한국어)</label>
            <input
              type="text"
              className={styles.input}
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>설명 (일본어)</label>
            <input
              type="text"
              className={styles.input}
              value={formData.descriptionJp || ''}
              onChange={(e) => setFormData({ ...formData, descriptionJp: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              Before 이미지 {!item && <span style={{ color: '#ff4444' }}>*</span>}
            </label>
            <input
              type="file"
              className={styles.fileInput}
              accept="image/*"
              onChange={handleBeforeFileChange}
              required={!item && !formData.beforeImage}
            />
            {beforePreview && (
              <div style={{ position: 'relative', display: 'inline-block', marginTop: '8px' }}>
                <img
                  src={beforePreview}
                  alt="Before preview"
                  style={{ maxWidth: '200px', borderRadius: '4px', display: 'block' }}
                />
                <button
                  type="button"
                  onClick={handleRemoveBeforeImage}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                  title="이미지 제거"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              After 이미지 {!item && <span style={{ color: '#ff4444' }}>*</span>}
            </label>
            <input
              type="file"
              className={styles.fileInput}
              accept="image/*"
              onChange={handleAfterFileChange}
              required={!item && !formData.afterImage}
            />
            {afterPreview && (
              <div style={{ position: 'relative', display: 'inline-block', marginTop: '8px' }}>
                <img
                  src={afterPreview}
                  alt="After preview"
                  style={{ maxWidth: '200px', borderRadius: '4px', display: 'block' }}
                />
                <button
                  type="button"
                  onClick={handleRemoveAfterImage}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                  title="이미지 제거"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>순서 (카테고리 내)</label>
            <input
              type="number"
              className={styles.input}
              value={formData.order || 1}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
              required
              min="1"
            />
            <small style={{ color: '#666', fontSize: '12px', marginTop: '4px' }}>
              {formData.category} 카테고리 내에서의 순서입니다.
            </small>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelButton} onClick={onClose}>
              취소
            </button>
            <button type="submit" className={styles.submitButton} disabled={uploading}>
              {uploading ? '저장 중...' : '저장'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// 팝업 관리 컴포넌트
function PopupManagement() {
  const [items, setItems] = useState<PopupItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PopupItem | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/popup');
      const data = await response.json();
      if (data.success) {
        setItems(data.data);
      }
    } catch (error) {
      console.error('팝업 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/api/popup?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('삭제되었습니다.');
        fetchItems();
      } else {
        alert('삭제 실패: ' + data.error);
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const handleEdit = (item: PopupItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingItem({
      id: 0,
      title: '',
      titleJp: '',
      content: '',
      contentJp: '',
      imageUrl: '',
      isActive: true,
      order: items.length + 1,
      position: 'center',
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleToggleActive = async (item: PopupItem) => {
    try {
      const response = await fetch('/api/popup', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...item,
          isActive: !item.isActive,
        }),
      });

      const data = await response.json();

      if (data.success) {
        fetchItems();
      } else {
        alert('상태 변경 실패: ' + data.error);
      }
    } catch (error) {
      alert('상태 변경 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <button className={styles.addButton} onClick={handleAdd}>
          + 새 팝업 추가
        </button>
      </div>

      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>제목(한국어)</th>
                <th className={styles.th}>제목(일본어)</th>
                <th className={styles.th}>이미지</th>
                <th className={styles.th}>위치</th>
                <th className={styles.th}>순서</th>
                <th className={styles.th}>활성화</th>
                <th className={styles.th}>작업</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={8} className={styles.td} style={{ textAlign: 'center', padding: '40px' }}>
                    데이터가 없습니다.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.td}>{item.id}</td>
                    <td className={styles.td}>{item.title}</td>
                    <td className={styles.td}>{item.titleJp || '-'}</td>
                    <td className={styles.td}>
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt="Popup" className={styles.imagePreview} />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className={styles.td}>{item.position}</td>
                    <td className={styles.td}>{item.order}</td>
                    <td className={styles.td}>
                      <button
                        className={styles.editButton}
                        onClick={() => handleToggleActive(item)}
                        style={{
                          backgroundColor: item.isActive ? '#10B981' : '#EF4444',
                          color: '#FFFFFF',
                        }}
                      >
                        {item.isActive ? '활성' : '비활성'}
                      </button>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actionButtons}>
                        <button className={styles.editButton} onClick={() => handleEdit(item)}>
                          수정
                        </button>
                        <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && <PopupModal item={editingItem} onClose={handleCloseModal} onSuccess={fetchItems} />}
    </>
  );
}

// 팝업 모달
function PopupModal({
  item,
  onClose,
  onSuccess,
}: {
  item: PopupItem | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<Partial<PopupItem>>(item || {});
  const [uploading, setUploading] = useState(false);

  // 에디터 내 이미지 업로드 핸들러
  const handleEditorImageUpload = async (file: File): Promise<string> => {
    const formDataFile = new FormData();
    formDataFile.append('file', file);

    const response = await fetch('/api/popup/upload', {
      method: 'POST',
      body: formDataFile,
    });

    const data = await response.json();
    if (data.success) {
      return data.path;
    }
    throw new Error('이미지 업로드 실패');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      const method = item && item.id ? 'PUT' : 'POST';
      const body = {
        ...formData,
      };

      const response = await fetch('/api/popup', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        alert(item && item.id ? '수정되었습니다.' : '추가되었습니다.');
        onSuccess();
        onClose();
      } else {
        alert('실패: ' + data.error);
      }
    } catch (error) {
      alert('오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>{item && item.id ? '팝업 수정' : '새 팝업 추가'}</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>제목 (한국어) *</label>
            <input
              type="text"
              className={styles.input}
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>제목 (일본어)</label>
            <input
              type="text"
              className={styles.input}
              value={formData.titleJp || ''}
              onChange={(e) => setFormData({ ...formData, titleJp: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>내용 (한국어)</label>
            <RichTextEditor
              value={formData.content || ''}
              onChange={(value) => setFormData({ ...formData, content: value })}
              placeholder="팝업 내용을 입력하세요..."
              onImageUpload={handleEditorImageUpload}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>내용 (일본어)</label>
            <RichTextEditor
              value={formData.contentJp || ''}
              onChange={(value) => setFormData({ ...formData, contentJp: value })}
              placeholder="ポップアップ内容を入力してください..."
              onImageUpload={handleEditorImageUpload}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>팝업 위치 *</label>
            <select
              className={styles.select}
              value={formData.position || 'center'}
              onChange={(e) => setFormData({ ...formData, position: e.target.value as PopupPosition })}
              required
            >
              <option value="top-left">왼쪽 위</option>
              <option value="top-center">중앙 위</option>
              <option value="top-right">오른쪽 위</option>
              <option value="center-left">왼쪽 중앙</option>
              <option value="center">중앙</option>
              <option value="center-right">오른쪽 중앙</option>
              <option value="bottom-left">왼쪽 아래</option>
              <option value="bottom-center">중앙 아래</option>
              <option value="bottom-right">오른쪽 아래</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>표시 순서</label>
            <input
              type="number"
              className={styles.input}
              value={formData.order || 1}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
              required
              min="1"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              <input
                type="checkbox"
                checked={formData.isActive !== false}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                style={{ marginRight: '8px' }}
              />
              활성화
            </label>
          </div>

          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelButton} onClick={onClose}>
              취소
            </button>
            <button type="submit" className={styles.submitButton} disabled={uploading}>
              {uploading ? '저장 중...' : '저장'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
