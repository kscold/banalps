'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import * as styles from '../AdminPage.css';

// RichTextEditor를 dynamic import (SSR 이슈 방지)
const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

type Category = '이마축소' | '흉터&재수술' | '헤어라인(남성)' | '헤어라인(여성)' | '정수리';
type ActivityType = '발표' | '논문' | '저널' | '수상' | '연구' | '역서';

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

interface AcademicActivityItem {
  _id?: string;
  id: number;
  year: number;
  date: string;
  type: ActivityType;
  event: {
    ko: string;
    jp: string;
  };
  title: {
    ko: string;
    jp: string;
  };
  order: number;
}

interface SlideItem {
  _id?: string;
  id: number;
  category: string;
  beforeImage: string;
  afterImage: string;
  scale: number;
  offsetX?: number; // 이미지 x 위치 offset (%)
  offsetY?: number; // 이미지 y 위치 offset (%)
  order: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'before-after' | 'popup' | 'academic' | 'slide'>('before-after');

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
        <div className={styles.container} style={{ color: '#242424' }}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.adminPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>바람부는날에도 관리자</h1>
            <div style={{ marginTop: '8px', fontSize: '14px', color: '#242424' }}>
              <div style={{ marginBottom: '4px' }}>
                <strong>버그 및 업데이트 문의</strong>
              </div>
              <div>개발자: 김승찬 | 010-6545-6502</div>
              <div>카카오톡: ks_cold</div>
            </div>
          </div>
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
            className={`${styles.tab} ${activeTab === 'slide' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('slide')}
          >
            페이지 별 전후 관리
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'popup' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('popup')}
          >
            팝업 관리
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'academic' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('academic')}
          >
            학술 정보 관리
          </button>
        </div>

        <div className={styles.content}>
          {activeTab === 'before-after' ? (
            <BeforeAfterManagement />
          ) : activeTab === 'popup' ? (
            <PopupManagement />
          ) : activeTab === 'academic' ? (
            <AcademicActivityManagement />
          ) : (
            <SlideManagement />
          )}
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
            `일본어 번역: ${data.samples?.withTitleJp || 0}/${data.samples?.withTitle || 0}개`
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
        <p style={{ marginTop: '16px', marginBottom: '24px', color: '#242424' }}>
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
      {/* 안내 메시지 */}
      <div
        style={{
          backgroundColor: '#E8F4FD',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #73D5FA',
        }}
      >
        <h3 style={{ margin: '0 0 8px 0', color: '#242424', fontSize: '16px', fontWeight: 600 }}>
          ℹ️ 수술 전후 관리 안내
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#242424', fontSize: '14px', lineHeight: '1.6' }}>
          <li>카테고리별로 수술 전후 사진을 관리합니다</li>
          <li>
            <strong>순서</strong>: 같은 카테고리 내에서 표시 순서를 지정합니다 (작은 숫자가 먼저 표시됨)
          </li>
          <li>제목과 설명은 선택사항이며, 일본어 번역도 입력할 수 있습니다</li>
        </ul>
      </div>

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
        {/* <button
          className={styles.addButton}
          style={{ backgroundColor: '#14AEFF' }}
          onClick={() => setShowMigration(true)}
        >
          데이터 마이그레이션
        </button> */}
      </div>

      {loading ? (
        <p style={{ color: '#242424' }}>로딩 중...</p>
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

      {isModalOpen && <BeforeAfterModal item={editingItem} onClose={handleCloseModal} onSuccess={fetchItems} />}
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
            <label className={styles.label}>Before 이미지 {!item && <span style={{ color: '#ff4444' }}>*</span>}</label>
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
            <label className={styles.label}>After 이미지 {!item && <span style={{ color: '#ff4444' }}>*</span>}</label>
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
            <small style={{ color: '#242424', fontSize: '12px', marginTop: '4px' }}>
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
    // 같은 위치의 팝업 중 가장 큰 order 값을 찾아서 +1
    const centerPopups = items.filter((item) => item.position === 'center');
    const maxOrder = centerPopups.length > 0 ? Math.max(...centerPopups.map((item) => item.order)) : 0;

    setEditingItem({
      id: 0,
      title: '',
      titleJp: '',
      content: '',
      contentJp: '',
      imageUrl: '',
      isActive: true,
      order: maxOrder + 1,
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
      {/* 안내 메시지 */}
      <div
        style={{
          backgroundColor: '#E8F4FD',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #73D5FA',
        }}
      >
        <h3 style={{ margin: '0 0 8px 0', color: '#242424', fontSize: '16px', fontWeight: 600 }}>ℹ️ 팝업 관리 안내</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#242424', fontSize: '14px', lineHeight: '1.6' }}>
          <li>
            <strong>위치</strong>: 데스크탑에서 팝업이 표시될 위치 (모바일은 항상 중앙)
          </li>
          <li>
            <strong>표시 순서</strong>: 같은 위치의 팝업이 여러 개일 때 순서를 지정합니다
          </li>
          <li>
            <strong>순서 자동 조정</strong>: 순서를 변경하면 같은 위치의 다른 팝업들이 자동으로 밀립니다
          </li>
          <li>활성화된 팝업만 사용자에게 표시됩니다</li>
        </ul>
      </div>

      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <button className={styles.addButton} onClick={handleAdd}>
          + 새 팝업 추가
        </button>
      </div>

      {loading ? (
        <p style={{ color: '#242424' }}>로딩 중...</p>
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
                      {item.imageUrl ? <img src={item.imageUrl} alt="Popup" className={styles.imagePreview} /> : '-'}
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
  const [allItems, setAllItems] = useState<PopupItem[]>([]);

  // 전체 팝업 목록 불러오기
  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await fetch('/api/popup');
        const data = await response.json();
        if (data.success) {
          setAllItems(data.data);
        }
      } catch (error) {
        console.error('팝업 목록 조회 실패:', error);
      }
    };
    fetchAllItems();
  }, []);

  // position이 변경될 때 해당 위치의 권장 order 값 계산
  const getRecommendedOrder = (position: PopupPosition) => {
    const samePositionItems = allItems.filter(
      (i) => i.position === position && (!item || i.id !== item.id)
    );
    return samePositionItems.length > 0 ? Math.max(...samePositionItems.map((i) => i.order)) + 1 : 1;
  };

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
            <label className={styles.label}>팝업 위치 * (데스크탑 전용)</label>
            <select
              className={styles.select}
              value={formData.position || 'center'}
              onChange={(e) => {
                const newPosition = e.target.value as PopupPosition;
                const recommendedOrder = getRecommendedOrder(newPosition);
                setFormData({
                  ...formData,
                  position: newPosition,
                  order: recommendedOrder
                });
              }}
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
            <small style={{ color: '#242424', fontSize: '12px', marginTop: '4px', display: 'block' }}>
              모바일에서는 항상 중앙에 표시됩니다. 같은 위치의 팝업은 책처럼 겹쳐서 표시됩니다.
            </small>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>표시 순서 (같은 위치 내)</label>
            <input
              type="number"
              className={styles.input}
              value={formData.order || 1}
              onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
              required
              min="1"
            />
            <small style={{ color: '#242424', fontSize: '12px', marginTop: '4px', display: 'block' }}>
              숫자가 작을수록 앞에 표시됩니다 (1이 맨 앞). 순서를 변경하면 같은 위치의 다른 팝업들이 자동으로 밀립니다.
              {!item && formData.position && (
                <>
                  <br />
                  <strong>
                    현재 "{formData.position}" 위치의 권장 순서: {getRecommendedOrder(formData.position)}
                  </strong>
                </>
              )}
            </small>
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

// 학술 활동 관리 컴포넌트
function AcademicActivityManagement() {
  const [items, setItems] = useState<AcademicActivityItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AcademicActivityItem | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [showMigration, setShowMigration] = useState(false);

  // 연도 목록 생성 (2011년부터 현재+1년까지)
  const years = Array.from({ length: new Date().getFullYear() - 2010 + 2 }, (_, i) => new Date().getFullYear() + 1 - i);

  useEffect(() => {
    fetchItems();
  }, [selectedYear]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/academic-activity');
      const data = await response.json();
      if (data.success) {
        let filteredData = data.data;

        // 선택된 연도로 필터링
        if (selectedYear !== 'all') {
          filteredData = data.data.filter((item: AcademicActivityItem) => item.year === selectedYear);
        }

        // 날짜순으로 정렬 (최신순)
        const sortedItems = filteredData.sort((a: AcademicActivityItem, b: AcademicActivityItem) => {
          const parseDate = (dateStr: string) => {
            if (dateStr.includes('.')) {
              return new Date(dateStr.replace(/\./g, '-'));
            }
            return new Date(`${dateStr}-12-31`); // 연도만 있으면 해당 연도 마지막으로
          };

          const dateA = parseDate(a.date);
          const dateB = parseDate(b.date);
          return dateB.getTime() - dateA.getTime(); // 최신순
        });

        setItems(sortedItems);
      }
    } catch (error) {
      console.error('학술 활동 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/academic-activity?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('삭제되었습니다.');
        fetchItems();
      } else {
        alert('삭제 실패: ' + data.message);
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const handleEdit = (item: AcademicActivityItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    const defaultYear = selectedYear === 'all' ? new Date().getFullYear() : selectedYear;

    setEditingItem({
      id: 0,
      year: defaultYear,
      date: `${defaultYear}.`,
      type: '발표',
      event: { ko: '', jp: '' },
      title: { ko: '', jp: '' },
      order: 0, // 날짜순 정렬로 자동 처리됨
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleMigrate = async () => {
    if (!confirm('기존 데이터를 모두 삭제하고 academicActivities.ts 데이터를 마이그레이션하시겠습니까?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/academic-migrate', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        alert(`${data.message}\n\n총 ${data.count}개의 학술 활동이 마이그레이션되었습니다.`);
        fetchItems();
        setShowMigration(false);
      } else {
        alert('마이그레이션 실패: ' + data.message);
      }
    } catch (error) {
      alert('마이그레이션 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  if (showMigration) {
    return (
      <>
        <button className={styles.addButton} onClick={() => setShowMigration(false)}>
          ← 목록으로 돌아가기
        </button>
        <h2>학술 활동 데이터 마이그레이션</h2>
        <p style={{ marginTop: '16px', marginBottom: '24px', color: '#242424' }}>
          academicActivities.ts 파일의 데이터를 MongoDB에 마이그레이션합니다.
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
      {/* 안내 메시지 */}
      <div
        style={{
          backgroundColor: '#E8F4FD',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #73D5FA',
        }}
      >
        <h3 style={{ margin: '0 0 8px 0', color: '#242424', fontSize: '16px', fontWeight: 600 }}>
          ℹ️ 학술 정보 관리 안내
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#242424', fontSize: '14px', lineHeight: '1.6' }}>
          <li>
            <strong>자동 정렬</strong>: 학술 활동은 날짜를 기준으로 자동으로 최신순(내림차순)으로 정렬됩니다
          </li>
          <li>
            <strong>날짜 형식</strong>: "2025.05.11" 형식으로 입력합니다 (YYYY.MM.DD)
          </li>
          <li>
            <strong>연도만 입력</strong>: 연도만 입력하면 해당 연도의 가장 마지막(12월 31일)으로 표시됩니다
          </li>
          <li>한국어와 일본어 번역을 모두 입력해야 합니다</li>
          <li>타입: 발표, 논문, 저널, 수상, 연구, 역서 중 선택 가능</li>
        </ul>
      </div>

      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <label style={{ marginRight: '12px', fontWeight: '500', color: '#242424' }}>연도 선택:</label>
        <select
          className={styles.select}
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
          style={{ padding: '8px 12px', fontSize: '14px' }}
        >
          <option value="all">전체</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button className={styles.addButton} onClick={handleAdd}>
          + 새 학술 활동 추가
        </button>
        {/* <button
          className={styles.addButton}
          style={{ backgroundColor: '#14AEFF' }}
          onClick={() => setShowMigration(true)}
        >
          데이터 마이그레이션
        </button> */}
      </div>

      {loading ? (
        <p style={{ color: '#242424' }}>로딩 중...</p>
      ) : (
        <div style={{ overflowX: 'auto', maxHeight: '600px', overflowY: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>연도</th>
                <th className={styles.th}>날짜</th>
                <th className={styles.th}>타입</th>
                <th className={styles.th}>행사명(한국어)</th>
                <th className={styles.th}>제목(한국어)</th>
                <th className={styles.th}>작업</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={7} className={styles.td} style={{ textAlign: 'center', padding: '40px' }}>
                    {selectedYear === 'all' ? '데이터가 없습니다.' : `${selectedYear}년 데이터가 없습니다.`}
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.td}>{item.id}</td>
                    <td className={styles.td}>{item.year}</td>
                    <td className={styles.td}>{item.date}</td>
                    <td className={styles.td}>{item.type}</td>
                    <td
                      className={styles.td}
                      style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {item.event.ko}
                    </td>
                    <td
                      className={styles.td}
                      style={{ maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {item.title.ko}
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

      {isModalOpen && <AcademicActivityModal item={editingItem} onClose={handleCloseModal} onSuccess={fetchItems} />}
    </>
  );
}

// 학술 활동 모달
function AcademicActivityModal({
  item,
  onClose,
  onSuccess,
}: {
  item: AcademicActivityItem | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<Partial<AcademicActivityItem>>(item || {});
  const [uploading, setUploading] = useState(false);

  const activityTypes: ActivityType[] = ['발표', '논문', '저널', '수상', '연구', '역서'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.year || !formData.date || !formData.type) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    if (!formData.event?.ko || !formData.event?.jp) {
      alert('행사명을 한국어와 일본어로 모두 입력해주세요.');
      return;
    }

    if (!formData.title?.ko || !formData.title?.jp) {
      alert('제목을 한국어와 일본어로 모두 입력해주세요.');
      return;
    }

    setUploading(true);

    try {
      const method = item && item.id ? 'PUT' : 'POST';

      const body: any = {
        year: formData.year,
        date: formData.date,
        type: formData.type,
        event: formData.event,
        title: formData.title,
        order: formData.order || 0,
      };

      if (item && item.id) {
        body.id = item.id;
      }

      const response = await fetch('/api/admin/academic-activity', {
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
        alert('실패: ' + data.message);
      }
    } catch (error) {
      alert('오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <h2 className={styles.modalTitle}>{item && item.id ? '학술 활동 수정' : '새 학술 활동 추가'}</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>연도 *</label>
            <input
              type="number"
              className={styles.input}
              value={formData.year || new Date().getFullYear()}
              onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
              required
              min="2011"
              max={new Date().getFullYear() + 1}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>날짜 *</label>
            <input
              type="text"
              className={styles.input}
              value={formData.date || ''}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              placeholder="예: 2025.05.11"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>타입 *</label>
            <select
              className={styles.select}
              value={formData.type || '발표'}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as ActivityType })}
              required
            >
              {activityTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>행사명 (한국어) *</label>
            <textarea
              className={styles.input}
              value={formData.event?.ko || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  event: { ...formData.event!, ko: e.target.value },
                })
              }
              placeholder="예: International Congress of the KSHRS 2025"
              required
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>행사명 (일본어) *</label>
            <textarea
              className={styles.input}
              value={formData.event?.jp || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  event: { ...formData.event!, jp: e.target.value },
                })
              }
              placeholder="예: International Congress of the KSHRS 2025"
              required
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>제목 (한국어) *</label>
            <textarea
              className={styles.input}
              value={formData.title?.ko || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: { ...formData.title!, ko: e.target.value },
                })
              }
              placeholder="예: Hair transplantation after reduction foreheadplasty"
              required
              rows={3}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>제목 (일본어) *</label>
            <textarea
              className={styles.input}
              value={formData.title?.jp || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: { ...formData.title!, jp: e.target.value },
                })
              }
              placeholder="예: Hair transplantation after reduction foreheadplasty"
              required
              rows={3}
              style={{ resize: 'vertical' }}
            />
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

// 슬라이드 관리 컴포넌트
function SlideManagement() {
  const [items, setItems] = useState<SlideItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<SlideItem | null>(null);
  const [showMigration, setShowMigration] = useState(false);

  const slideCategories = [
    { value: 'forehead/hair-transplant', label: '이마축소 - 모발이식' },
    { value: 'forehead/scar-reduction', label: '이마축소 - 흉터축소' },
    { value: 'scar-reduction', label: '흉터축소' },
    { value: 'hair-transplant/crown', label: '모발이식 - 정수리' },
    { value: 'hair-transplant/hairline', label: '모발이식 - 헤어라인' },
    { value: 'hair-transplant/incision', label: '모발이식 - 절개' },
    { value: 'hair-transplant/reoperation', label: '모발이식 - 재수술' },
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/slide');
      const data = await response.json();
      if (data.success) {
        setItems(data.data);
      }
    } catch (error) {
      console.error('슬라이드 조회 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/slide?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        alert('삭제되었습니다.');
        fetchItems();
      } else {
        alert('삭제 실패: ' + data.message);
      }
    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.');
    }
  };

  const handleEdit = (item: SlideItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingItem({
      id: 0,
      category: slideCategories[0].value,
      beforeImage: '',
      afterImage: '',
      scale: 1.0,
      order: 0,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleMigrate = async () => {
    if (!confirm('기존 슬라이드 데이터를 모두 삭제하고 public/slide 폴더의 이미지로 마이그레이션하시겠습니까?')) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/slide-migrate', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        fetchItems();
        setShowMigration(false);
      } else {
        alert('마이그레이션 실패: ' + data.message);
      }
    } catch (error) {
      alert('마이그레이션 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 안내 메시지 */}
      <div
        style={{
          backgroundColor: '#E8F4FD',
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #73D5FA',
        }}
      >
        <h3 style={{ margin: '0 0 8px 0', color: '#242424', fontSize: '16px', fontWeight: 600 }}>
          ℹ️ 페이지 별 전후 관리 안내
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#242424', fontSize: '14px', lineHeight: '1.6' }}>
          <li>각 카테고리별로 Before/After 슬라이드 이미지를 관리합니다</li>
          <li>
            <strong>확대 비율(Scale)</strong>: 이미지의 표시 크기를 조정합니다 (1.0 = 100%, 범위: 0.5 ~ 3.0)
          </li>
          <li>
            <strong>표시 영역 (초록 박스)</strong>: 이미지를 클릭하면 실제 표시될 영역을 확인할 수 있습니다
          </li>
          <li>
            <strong>이미지 조정</strong>: 슬라이더로 확대 비율을 조절하고, 이미지를 드래그하여 위치를 조정할 수 있습니다
          </li>
          <li>초록 박스 안에 중요한 부분이 잘 보이도록 확대와 위치를 설정하세요</li>
        </ul>
      </div>

      <div style={{ marginBottom: '24px', marginTop: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
        {/* <button className={styles.addButton} onClick={handleAdd}>
          + 새 슬라이드 추가
        </button> */}
        {/* <button
          className={styles.addButton}
          onClick={() => setShowMigration(!showMigration)}
          style={{ background: '#6c757d' }}
        >
          마이그레이션 {showMigration ? '▲' : '▼'}
        </button> */}
      </div>

      {showMigration && (
        <div
          style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '24px',
            border: '1px solid #dee2e6',
          }}
        >
          <h3 style={{ marginTop: 0 }}>슬라이드 데이터 마이그레이션</h3>
          <p style={{ color: '#242424', marginBottom: '16px' }}>
            public/slide 폴더의 이미지 파일들을 MongoDB로 마이그레이션합니다.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className={styles.addButton} onClick={handleMigrate}>
              마이그레이션 실행
            </button>
            <button
              className={styles.addButton}
              onClick={async () => {
                if (!confirm('기존 슬라이드 데이터의 스키마를 수정하시겠습니까?')) return;
                setLoading(true);
                try {
                  const response = await fetch('/api/admin/slide-fix', { method: 'POST' });
                  const data = await response.json();
                  if (data.success) {
                    alert(data.message);
                    fetchItems();
                  } else {
                    alert('스키마 수정 실패: ' + data.message);
                  }
                } catch (error) {
                  alert('스키마 수정 중 오류가 발생했습니다.');
                } finally {
                  setLoading(false);
                }
              }}
              style={{ background: '#dc3545' }}
            >
              스키마 수정 (cropSettings → scale)
            </button>
          </div>
        </div>
      )}

      {loading ? (
        <p style={{ color: '#242424' }}>로딩 중...</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>카테고리</th>
                <th className={styles.th}>Before</th>
                <th className={styles.th}>After</th>
                <th className={styles.th}>확대비율</th>
                <th className={styles.th}>작업</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={6} className={styles.td} style={{ textAlign: 'center', padding: '40px' }}>
                    데이터가 없습니다.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.td}>{item.id}</td>
                    <td className={styles.td}>
                      {slideCategories.find((c) => c.value === item.category)?.label || item.category}
                    </td>
                    <td className={styles.td}>
                      <img src={item.beforeImage} alt="Before" className={styles.imagePreview} />
                    </td>
                    <td className={styles.td}>
                      <img src={item.afterImage} alt="After" className={styles.imagePreview} />
                    </td>
                    <td className={styles.td}>{item.scale ? `${item.scale}x` : '1.0x'}</td>
                    <td className={styles.td}>
                      <div className={styles.actionButtons}>
                        <button className={styles.editButton} onClick={() => handleEdit(item)}>
                          수정
                        </button>
                        {/* <button className={styles.deleteButton} onClick={() => handleDelete(item.id)}>
                          삭제
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && <SlideModal item={editingItem} onClose={handleCloseModal} onSuccess={fetchItems} />}
    </>
  );
}

// 슬라이드 모달 컴포넌트
function SlideModal({
  item,
  onClose,
  onSuccess,
}: {
  item: SlideItem | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [formData, setFormData] = useState<Partial<SlideItem>>(item || { scale: 1.0, offsetX: 0, offsetY: 0 });
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState<string | null>(item?.beforeImage || null);
  const [afterPreview, setAfterPreview] = useState<string | null>(item?.afterImage || null);
  const [uploading, setUploading] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [cropTarget, setCropTarget] = useState<'before' | 'after' | null>(null);
  const [zoom, setZoom] = useState(item?.scale || 1.0);
  const [offsetX, setOffsetX] = useState(item?.offsetX || 0);
  const [offsetY, setOffsetY] = useState(item?.offsetY || 0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const slideCategories = [
    { value: 'forehead/hair-transplant', label: '이마축소 - 모발이식' },
    { value: 'forehead/scar-reduction', label: '이마축소 - 흉터축소' },
    { value: 'scar-reduction', label: '흉터축소' },
    { value: 'hair-transplant/crown', label: '모발이식 - 정수리' },
    { value: 'hair-transplant/hairline', label: '모발이식 - 헤어라인' },
    { value: 'hair-transplant/incision', label: '모발이식 - 절개' },
    { value: 'hair-transplant/reoperation', label: '모발이식 - 재수술' },
  ];

  const handleBeforeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBeforeFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBeforePreview(reader.result as string);
        setCropTarget('before');
        setShowCropper(true);
        setZoom(1);
        setOffsetX(0);
        setOffsetY(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAfterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAfterFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAfterPreview(reader.result as string);
        setCropTarget('after');
        setShowCropper(true);
        setZoom(1);
        setOffsetX(0);
        setOffsetY(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    // 이동량을 퍼센트로 변환 (뷰포트 크기 기준)
    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const percentX = (deltaX / rect.width) * 100;
    const percentY = (deltaY / rect.height) * 100;

    setOffsetX((prev) => prev + percentX);
    setOffsetY((prev) => prev + percentY);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCropSave = () => {
    // zoom과 offset 값을 저장
    setFormData((prev) => ({
      ...prev,
      scale: zoom,
      offsetX: offsetX,
      offsetY: offsetY
    }));
    setShowCropper(false);
    setCropTarget(null);
  };

  const handleCropCancel = () => {
    // 이미지 업로드 취소
    if (cropTarget === 'before') {
      setBeforeFile(null);
      setBeforePreview(item?.beforeImage || null);
    } else {
      setAfterFile(null);
      setAfterPreview(item?.afterImage || null);
    }
    setShowCropper(false);
    setCropTarget(null);
    setZoom(item?.scale || 1);
    setOffsetX(item?.offsetX || 0);
    setOffsetY(item?.offsetY || 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item && !beforeFile && !formData.beforeImage) {
      alert('Before 이미지를 업로드해주세요.');
      return;
    }
    if (!item && !afterFile && !formData.afterImage) {
      alert('After 이미지를 업로드해주세요.');
      return;
    }

    setUploading(true);
    try {
      let beforeImagePath = formData.beforeImage;
      let afterImagePath = formData.afterImage;

      if (beforeFile) {
        const fd = new FormData();
        fd.append('file', beforeFile);
        fd.append('category', formData.category!);
        fd.append('type', 'before');
        const res = await fetch('/api/admin/slide/upload', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) beforeImagePath = data.path;
      }

      if (afterFile) {
        const fd = new FormData();
        fd.append('file', afterFile);
        fd.append('category', formData.category!);
        fd.append('type', 'after');
        const res = await fetch('/api/admin/slide/upload', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.success) afterImagePath = data.path;
      }

      const method = item && item.id ? 'PUT' : 'POST';
      const body: any = {
        category: formData.category,
        beforeImage: beforeImagePath,
        afterImage: afterImagePath,
        scale: formData.scale || 1.0,
        offsetX: formData.offsetX || 0,
        offsetY: formData.offsetY || 0,
        order: formData.order || 0,
      };
      if (item && item.id) body.id = item.id;

      console.log('[슬라이드 저장] Method:', method);
      console.log('[슬라이드 저장] Body:', body);
      console.log('[슬라이드 저장] formData.scale:', formData.scale);

      const response = await fetch('/api/admin/slide', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log('[슬라이드 저장] Response:', data);

      if (data.success) {
        alert(item && item.id ? '수정되었습니다.' : '추가되었습니다.');
        onSuccess();
        onClose();
      } else {
        alert('실패: ' + data.message);
      }
    } catch (error) {
      alert('오류가 발생했습니다.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      {showCropper && (cropTarget === 'before' ? beforePreview : afterPreview) && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            zIndex: 10000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: '20px', background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>이미지 확대 설정</h3>
            <p style={{ margin: '0 0 16px 0', color: '#242424', fontSize: '14px' }}>
              <strong style={{ color: '#00ff00' }}>초록 박스</strong>는 실제 표시 영역입니다.
              <br />
              슬라이더로 확대 비율을 조정하고, 이미지를 드래그하여 위치를 조정하세요.
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500 }}>확대 비율:</label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                style={{ flex: 1 }}
              />
              <span style={{ minWidth: '60px', fontSize: '14px' }}>{zoom.toFixed(1)}x</span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={handleCropCancel}
                style={{
                  flex: 1,
                  padding: '10px 20px',
                  background: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                취소
              </button>
              <button
                onClick={handleCropSave}
                style={{
                  flex: 1,
                  padding: '10px 20px',
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                적용
              </button>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '40px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '790px',
                maxWidth: '90%',
                aspectRatio: '790 / 410',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {/* 격자 오버레이 - 데스크탑 뷰포트 */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  border: '3px solid #00ff00',
                  pointerEvents: 'none',
                  zIndex: 10,
                  boxShadow: 'inset 0 0 0 2px rgba(0,255,0,0.3)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#00ff00',
                    color: 'black',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                  }}
                >
                  표시 영역 (드래그로 위치 조정)
                </div>
              </div>

              <img
                src={cropTarget === 'before' ? beforePreview! : afterPreview!}
                alt="Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: `scale(${zoom}) translate(${offsetX}%, ${offsetY}%)`,
                  transformOrigin: 'center center',
                  transition: isDragging ? 'none' : 'transform 0.2s ease',
                  display: 'block',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  userSelect: 'none',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}

      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <h2 className={styles.modalTitle}>{item && item.id ? '슬라이드 수정' : '새 슬라이드 추가'}</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>카테고리 *</label>
              <select
                className={styles.select}
                value={formData.category || slideCategories[0].value}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                {slideCategories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
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
                    style={{ maxWidth: '200px', borderRadius: '4px', display: 'block', cursor: 'pointer' }}
                    onClick={() => {
                      setCropTarget('before');
                      setZoom(formData.scale || 1.0);
                      setOffsetX(formData.offsetX || 0);
                      setOffsetY(formData.offsetY || 0);
                      setShowCropper(true);
                    }}
                  />
                  <small style={{ display: 'block', marginTop: '4px', color: '#242424' }}>클릭하여 확대 비율 조정</small>
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
                    style={{ maxWidth: '200px', borderRadius: '4px', display: 'block', cursor: 'pointer' }}
                    onClick={() => {
                      setCropTarget('after');
                      setZoom(formData.scale || 1.0);
                      setOffsetX(formData.offsetX || 0);
                      setOffsetY(formData.offsetY || 0);
                      setShowCropper(true);
                    }}
                  />
                  <small style={{ display: 'block', marginTop: '4px', color: '#242424' }}>클릭하여 확대 비율 조정</small>
                </div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>이미지 확대 비율 *</label>
              <input
                type="number"
                className={styles.input}
                value={formData.scale || 1.0}
                onChange={(e) => setFormData({ ...formData, scale: parseFloat(e.target.value) })}
                step="0.1"
                min="0.5"
                max="3.0"
                required
              />
              <small style={{ color: '#242424', marginTop: '4px', display: 'block' }}>
                1.0 = 100% (기본값), 범위: 0.5 ~ 3.0
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
    </>
  );
}
