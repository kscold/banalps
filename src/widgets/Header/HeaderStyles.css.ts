import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: '#FFFFFF',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  width: '100%',
  height: '85px',
})

export const container = style({
  maxWidth: '1600px',
  width: '100%',
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '28px',
  paddingRight: '60px',
  paddingBottom: '28px',
  paddingLeft: '60px',
  '@media': {
    'screen and (max-width: 1680px)': {
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
    'screen and (max-width: 768px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
  },
})

export const headerContent = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '35px',
})

export const logoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

export const logoImage = style({
  height: '35px',
  width: 'auto',
})

export const logoText = style({
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#14AEFF',
  textDecoration: 'none',
})

export const desktopNav = style({
  display: 'none',
  alignItems: 'center',
  gap: '2rem',
  height: '100%',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'flex',
    },
  },
})

export const navLink = style({
  color: '#374151',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  ':hover': {
    color: '#14AEFF',
    backgroundColor: 'rgba(20, 174, 255, 0.05)',
  },
})

export const actionButtons = style({
  display: 'none',
  alignItems: 'center',
  gap: '1rem',
  height: '100%',
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
})

export const loginButton = style({
  color: '#374151',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  ':hover': {
    color: '#14AEFF',
    backgroundColor: 'rgba(20, 174, 255, 0.05)',
  },
})

export const consultButton = style({
  backgroundColor: '#14AEFF',
  color: '#FFFFFF',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  boxShadow: '0 1px 2px 0 rgb(20 174 255 / 0.1)',
  ':hover': {
    backgroundColor: '#0EA5E9',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px 0 rgb(20 174 255 / 0.2)',
  },
})

export const mobileMenuButton = style({
  display: 'flex',
  alignItems: 'center',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
})

export const menuToggle = style({
  color: '#374151',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem',
  borderRadius: '6px',
  ':hover': {
    color: '#14AEFF',
    backgroundColor: 'rgba(20, 174, 255, 0.05)',
  },
})

export const menuIcon = style({
  height: '1.5rem',
  width: '1.5rem',
})

export const mobileMenu = style({
  display: 'block',
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
})

export const mobileMenuContent = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#FFFFFF',
  borderTop: '1px solid #E5E7EB',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  padding: '1rem 0',
})

export const mobileNavLink = style({
  display: 'block',
  padding: '0.75rem 2rem',
  color: '#374151',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  ':hover': {
    color: '#14AEFF',
    backgroundColor: 'rgba(20, 174, 255, 0.05)',
  },
})

export const mobileActions = style({
  display: 'flex',
  gap: '0.5rem',
  padding: '1rem 2rem 0.5rem',
  borderTop: '1px solid #E5E7EB',
  marginTop: '1rem',
})

export const mobileLoginButton = style({
  color: '#374151',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  ':hover': {
    color: '#14AEFF',
    backgroundColor: 'rgba(20, 174, 255, 0.05)',
  },
})

export const mobileConsultButton = style({
  backgroundColor: '#14AEFF',
  color: '#FFFFFF',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  fontSize: '0.9rem',
  fontWeight: '600',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#0EA5E9',
  },
})