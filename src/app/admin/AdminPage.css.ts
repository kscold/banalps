import { style } from '@vanilla-extract/css';
import { breakpoints } from '@/shared/styles/responsive.css';

export const adminPage = style({
  minHeight: '100vh',
  backgroundColor: '#FFFDF7',
  padding: '40px 20px',
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '40px',
  padding: '20px',
  backgroundColor: '#73D5FA',
  borderRadius: '12px',
});

export const title = style({
  fontSize: '32px',
  fontWeight: 700,
  color: '#272727',
  '@media': {
    [breakpoints.mobile]: {
      fontSize: '24px',
    },
  },
});

export const logoutButton = style({
  padding: '12px 24px',
  backgroundColor: '#272727',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 500,
  ':hover': {
    backgroundColor: '#000',
  },
});

export const tabs = style({
  display: 'flex',
  gap: '12px',
  marginBottom: '32px',
  borderBottom: '2px solid #73D5FA',
  paddingBottom: '12px',
});

export const tab = style({
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: '#272727',
  border: 'none',
  borderRadius: '8px 8px 0 0',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#D5FEFF',
  },
});

export const activeTab = style({
  backgroundColor: '#73D5FA',
  fontWeight: 700,
});

export const content = style({
  padding: '32px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
});

export const categoryTabs = style({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  borderBottom: '2px solid #E5E5E5',
  paddingBottom: '8px',
});

export const categoryTab = style({
  padding: '10px 20px',
  backgroundColor: 'transparent',
  color: '#666',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#F0FEFF',
    color: '#14AEFF',
  },
});

export const activeCategoryTab = style({
  backgroundColor: '#73D5FA',
  color: '#272727',
  fontWeight: 700,
  ':hover': {
    backgroundColor: '#73D5FA',
    color: '#272727',
  },
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '24px',
});

export const th = style({
  padding: '16px',
  backgroundColor: '#73D5FA',
  color: '#272727',
  fontWeight: 600,
  textAlign: 'left',
  borderBottom: '2px solid #272727',
});

export const td = style({
  padding: '16px',
  borderBottom: '1px solid #E5E5E5',
  verticalAlign: 'middle',
  color: '#000000',
});

export const imagePreview = style({
  width: '80px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: '4px',
});

export const actionButtons = style({
  display: 'flex',
  gap: '8px',
});

export const editButton = style({
  padding: '8px 16px',
  backgroundColor: '#73D5FA',
  color: '#272727',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  ':hover': {
    backgroundColor: '#14AEFF',
    color: 'white',
  },
});

export const deleteButton = style({
  padding: '8px 16px',
  backgroundColor: '#ff4444',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  ':hover': {
    backgroundColor: '#cc0000',
  },
});

export const addButton = style({
  padding: '12px 24px',
  backgroundColor: '#73D5FA',
  color: '#272727',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 600,
  marginBottom: '24px',
  ':hover': {
    backgroundColor: '#14AEFF',
    color: 'white',
  },
});

export const modal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const modalContent = style({
  backgroundColor: 'white',
  padding: '40px',
  borderRadius: '12px',
  maxWidth: '1000px',
  width: '90%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  '@media': {
    [breakpoints.mobile]: {
      maxWidth: '95%',
      padding: '24px',
    },
  },
});

export const modalTitle = style({
  fontSize: '24px',
  fontWeight: 700,
  color: '#272727',
  marginBottom: '24px',
  paddingRight: '40px',
});

export const modalCloseButton = style({
  position: 'absolute',
  top: '24px',
  right: '24px',
  width: '32px',
  height: '32px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#272727',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  ':hover': {
    backgroundColor: '#F5F5F5',
  },
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontSize: '14px',
  fontWeight: 600,
  color: '#272727',
});

export const input = style({
  padding: '12px',
  border: '2px solid #E5E5E5',
  color: '#272727',
  borderRadius: '8px',
  fontSize: '16px',
  ':focus': {
    outline: 'none',
    borderColor: '#73D5FA',
  },
});

export const select = style({
  padding: '12px',
  border: '2px solid #E5E5E5',
  borderRadius: '8px',
  fontSize: '16px',
  backgroundColor: 'white',
  color: '#272727',
  ':focus': {
    outline: 'none',
    borderColor: '#73D5FA',
  },
});

export const fileInput = style({
  padding: '12px',
  border: '2px dashed #73D5FA',
  borderRadius: '8px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#F0FEFF',
  },
});

export const modalActions = style({
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  marginTop: '24px',
});

export const submitButton = style({
  padding: '12px 24px',
  backgroundColor: '#73D5FA',
  color: '#272727',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 600,
  ':hover': {
    backgroundColor: '#14AEFF',
    color: 'white',
  },
});

export const cancelButton = style({
  padding: '12px 24px',
  backgroundColor: '#E5E5E5',
  color: '#272727',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 500,
  ':hover': {
    backgroundColor: '#CCCCCC',
  },
});

export const loginContainer = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#73D5FA',
});

export const loginBox = style({
  backgroundColor: 'white',
  padding: '48px',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
});

export const loginTitle = style({
  fontSize: '28px',
  fontWeight: 700,
  color: '#272727',
  marginBottom: '32px',
  textAlign: 'center',
});

export const loginButton = style({
  width: '100%',
  padding: '14px',
  backgroundColor: '#73D5FA',
  color: '#272727',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 600,
  marginTop: '8px',
  ':hover': {
    backgroundColor: '#14AEFF',
    color: 'white',
  },
});

export const errorMessage = style({
  color: '#ff4444',
  fontSize: '14px',
  marginTop: '8px',
});
