'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ResizableImageExtension from 'tiptap-extension-resize-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import FontSize from 'tiptap-extension-font-size';
import { useCallback, useEffect } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onImageUpload?: (file: File) => Promise<string>;
}

export default function RichTextEditor({ value, onChange, placeholder, onImageUpload }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // 리스트 기능 명시적 활성화
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'bullet-list',
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
          HTMLAttributes: {
            class: 'ordered-list',
          },
        },
        listItem: {
          // keepMarks: true,
          // keepAttributes: false,
          HTMLAttributes: {
            class: 'list-item',
          },
        },
      }),
      ResizableImageExtension.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: {
          class: 'resizable-image',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-500 underline',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph', 'listItem'], // listItem에도 정렬 적용
      }),
      TextStyle,
      Color,
      FontSize as any,
    ],
    content: value,
    immediatelyRender: false, // SSR 하이드레이션 이슈 방지
    editorProps: {
      attributes: {
        class: 'tiptap-editor',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // value prop이 변경될 때 에디터 내용 업데이트
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  // 이미지 업로드 핸들러
  const handleImageUpload = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file && onImageUpload && editor) {
        try {
          const imageUrl = await onImageUpload(file);

          // 현재 텍스트 정렬 상태 가져오기
          const currentAlign = editor.isActive({ textAlign: 'center' })
            ? 'center'
            : editor.isActive({ textAlign: 'right' })
            ? 'right'
            : 'left';

          // 이미지 삽입
          editor.chain().focus().setImage({ src: imageUrl }).run();

          // 삽입된 이미지에 data-align 속성 추가
          setTimeout(() => {
            const imgElement = editor.view.dom.querySelector(`img[src="${imageUrl}"]`);
            if (imgElement) {
              imgElement.setAttribute('data-align', currentAlign);
              // HTML 업데이트
              onChange(editor.getHTML());
            }
          }, 100);
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
          alert('이미지 업로드에 실패했습니다.');
        }
      }
    };
  }, [editor, onImageUpload, onChange]);

  // 링크 추가
  const handleAddLink = useCallback(() => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('URL을 입력하세요:', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  // 텍스트 정렬 핸들러 (이미지 정렬도 함께 처리)
  const handleTextAlign = useCallback(
    (alignment: 'left' | 'center' | 'right') => {
      editor?.chain().focus().setTextAlign(alignment).run();

      // 선택된 요소에 이미지가 있으면 containerstyle 속성 수정
      setTimeout(() => {
        const { from, to } = editor?.state.selection || {};
        if (from !== undefined && to !== undefined && editor) {
          // 에디터 내 모든 이미지 찾기
          const allImages = editor.view.dom.querySelectorAll('img.resizable-image');

          allImages.forEach((img) => {
            // 이미지가 선택된 영역에 있는지 확인
            const imgPos = editor.view.posAtDOM(img, 0);
            if (imgPos >= from && imgPos <= to) {
              img.setAttribute('data-align', alignment);

              // containerstyle 속성 수정 (ResizableImageExtension이 사용)
              const currentContainerStyle = img.getAttribute('containerstyle') || '';
              let newContainerStyle = currentContainerStyle;

              // 기존 margin 스타일 제거
              newContainerStyle = newContainerStyle.replace(/margin:\s*[^;]+;?/g, '');
              newContainerStyle = newContainerStyle.replace(/margin-left:\s*[^;]+;?/g, '');
              newContainerStyle = newContainerStyle.replace(/margin-right:\s*[^;]+;?/g, '');

              // 새 정렬 스타일 추가
              if (alignment === 'center') {
                newContainerStyle += ' margin: 0 auto;';
              } else if (alignment === 'right') {
                newContainerStyle += ' margin: 0 0 0 auto;';
              } else {
                newContainerStyle += ' margin: 0 auto 0 0;';
              }

              img.setAttribute('containerstyle', newContainerStyle.trim());
            }
          });

          // 현재 선택된 이미지도 확인
          const currentNode = editor.view.dom.querySelector('.ProseMirror-selectednode');
          if (currentNode && currentNode.tagName === 'IMG' && currentNode.classList.contains('resizable-image')) {
            const img = currentNode as HTMLImageElement;
            img.setAttribute('data-align', alignment);

            const currentContainerStyle = img.getAttribute('containerstyle') || '';
            let newContainerStyle = currentContainerStyle;

            newContainerStyle = newContainerStyle.replace(/margin:\s*[^;]+;?/g, '');
            newContainerStyle = newContainerStyle.replace(/margin-left:\s*[^;]+;?/g, '');
            newContainerStyle = newContainerStyle.replace(/margin-right:\s*[^;]+;?/g, '');

            if (alignment === 'center') {
              newContainerStyle += ' margin: 0 auto;';
            } else if (alignment === 'right') {
              newContainerStyle += ' margin: 0 0 0 auto;';
            } else {
              newContainerStyle += ' margin: 0 auto 0 0;';
            }

            img.setAttribute('containerstyle', newContainerStyle.trim());
          }

          // HTML 업데이트
          setTimeout(() => {
            onChange(editor.getHTML());
          }, 100);
        }
      }, 100);
    },
    [editor, onChange]
  );

  if (!editor) {
    return null;
  }

  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
      {/* 툴바 */}
      <div
        style={{
          background: '#f8f8f8',
          padding: '8px',
          borderBottom: '1px solid #e0e0e0',
          display: 'flex',
          gap: '4px',
          flexWrap: 'wrap',
        }}
      >
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('bold') ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#272727',
          }}
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('italic') ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontStyle: 'italic',
            color: '#272727',
          }}
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('strike') ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            textDecoration: 'line-through',
            color: '#272727',
          }}
        >
          S
        </button>

        <div style={{ width: '1px', background: '#ddd', margin: '0 4px' }} />

        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#FF0000').run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('textStyle', { color: '#FF0000' }) ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#FF0000',
            fontWeight: 'bold',
          }}
        >
          A
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#0000FF').run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('textStyle', { color: '#0000FF' }) ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#0000FF',
            fontWeight: 'bold',
          }}
        >
          A
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setColor('#00AA00').run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('textStyle', { color: '#00AA00' }) ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#00AA00',
            fontWeight: 'bold',
          }}
        >
          A
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetColor().run()}
          style={{
            padding: '6px 12px',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
            fontWeight: 'bold',
          }}
          title="색상 초기화"
        >
          A
        </button>

        <div style={{ width: '1px', background: '#ddd', margin: '0 4px' }} />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('bulletList') ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
          }}
        >
          • 목록
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          style={{
            padding: '6px 12px',
            background: editor.isActive('orderedList') ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
          }}
        >
          1. 목록
        </button>

        <div style={{ width: '1px', background: '#ddd', margin: '0 4px' }} />

        <button
          type="button"
          onClick={() => handleTextAlign('left')}
          style={{
            padding: '6px 12px',
            background: editor.isActive({ textAlign: 'left' }) ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
          }}
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => handleTextAlign('center')}
          style={{
            padding: '6px 12px',
            background: editor.isActive({ textAlign: 'center' }) ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
          }}
        >
          ↔
        </button>
        <button
          type="button"
          onClick={() => handleTextAlign('right')}
          style={{
            padding: '6px 12px',
            background: editor.isActive({ textAlign: 'right' }) ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
          }}
        >
          →
        </button>

        <div style={{ width: '1px', background: '#ddd', margin: '0 4px' }} />

        <button
          type="button"
          onClick={handleAddLink}
          style={{
            padding: '6px 12px',
            background: editor.isActive('link') ? '#73D5FA' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
            fontWeight: '500',
          }}
        >
          링크
        </button>

        <button
          type="button"
          onClick={handleImageUpload}
          style={{
            padding: '6px 12px',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#272727',
            fontWeight: '500',
          }}
        >
          이미지
        </button>

        <div style={{ width: '1px', background: '#ddd', margin: '0 4px' }} />

        <select
          onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}
          value={editor.getAttributes('textStyle').fontSize || '16px'}
          style={{
            padding: '6px 12px',
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: "'S-Core Dream', sans-serif",
            color: '#272727',
          }}
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px (기본)</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
          <option value="32px">32px</option>
          <option value="36px">36px</option>
          <option value="48px">48px</option>
        </select>
      </div>

      {/* 에디터 */}
      <EditorContent editor={editor} />

      <style jsx global>{`
        .tiptap-editor {
          min-height: 240px;
          padding: 16px;
          font-family: 'S-Core Dream', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #242424;
          outline: none;
        }

        .tiptap-editor p {
          margin: 0 0 12px 0;
        }

        .tiptap-editor h1 {
          font-size: 28px;
          font-weight: 600;
          margin: 24px 0 16px 0;
        }

        .tiptap-editor h2 {
          font-size: 24px;
          font-weight: 600;
          margin: 20px 0 12px 0;
        }

        .tiptap-editor h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 16px 0 10px 0;
        }

        .tiptap-editor img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 16px 0;
          cursor: pointer;
        }

        /* 리사이징 가능한 이미지 스타일 */
        .tiptap-editor img.resizable-image {
          display: block;
          margin: 16px auto;
          border-radius: 8px;
          cursor: nwse-resize;
          transition: box-shadow 0.2s;
        }

        .tiptap-editor img.resizable-image:hover {
          box-shadow: 0 0 0 3px rgba(115, 213, 250, 0.3);
        }

        .tiptap-editor img.resizable-image.ProseMirror-selectednode {
          outline: 3px solid #73d5fa;
          outline-offset: 2px;
        }

        /* 이미지 정렬 지원 */
        .tiptap-editor p[style*='text-align: center'] img {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .tiptap-editor p[style*='text-align: right'] img {
          display: block;
          margin-left: auto;
          margin-right: 0;
        }

        .tiptap-editor p[style*='text-align: left'] img {
          display: block;
          margin-left: 0;
          margin-right: auto;
        }

        /* 이미지 드래그 핸들 스타일 */
        .tiptap-editor .image-resizer {
          position: absolute;
          border: 2px solid #73d5fa;
          pointer-events: none;
        }

        .tiptap-editor .image-resizer__handle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #73d5fa;
          border: 1px solid #fff;
          border-radius: 50%;
          pointer-events: all;
          cursor: nwse-resize;
        }

        .tiptap-editor .image-resizer__handle--ne {
          top: -5px;
          right: -5px;
        }

        .tiptap-editor .image-resizer__handle--se {
          bottom: -5px;
          right: -5px;
        }

        .tiptap-editor .image-resizer__handle--sw {
          bottom: -5px;
          left: -5px;
        }

        .tiptap-editor .image-resizer__handle--nw {
          top: -5px;
          left: -5px;
        }

        .tiptap-editor ul,
        .tiptap-editor ol {
          padding-left: 12px;
          margin: 12px 0;
          list-style-position: outside;
        }

        .tiptap-editor ul {
          list-style-type: disc;
        }

        .tiptap-editor ol {
          list-style-type: decimal;
        }

        .tiptap-editor li {
          margin: 4px 0;
          display: list-item;
        }

        .tiptap-editor li::marker {
          font-size: inherit;
        }

        .tiptap-editor li p {
          margin: 0;
        }

        .tiptap-editor a {
          color: #73d5fa;
          text-decoration: underline;
        }

        .tiptap-editor a:hover {
          color: #5bc0e8;
        }

        .tiptap-editor strong {
          font-weight: 600;
        }

        .tiptap-editor em {
          font-style: italic;
        }

        .tiptap-editor code {
          background: #f5f5f5;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
}
