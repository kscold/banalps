import { style } from '@vanilla-extract/css'

export const section = style({
  width: '100%',
  padding: '120px 0',
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '80px 0',
    },
  },
})

export const container = style({
  maxWidth: '1600px',
  width: '100%',
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 16px',
    },
  },
})

export const mainTitle = style({
  fontSize: '48px',
  fontWeight: 700,
  color: '#1a1a1a',
  lineHeight: 1.2,
  marginBottom: '32px',
  '@media': {
    'screen and (max-width: 1024px)': {
      fontSize: '40px',
    },
    'screen and (max-width: 768px)': {
      fontSize: '32px',
      marginBottom: '24px',
    },
    'screen and (max-width: 480px)': {
      fontSize: '28px',
    },
  },
})

export const subTitle = style({
  fontSize: '20px',
  fontWeight: 400,
  color: '#666666',
  lineHeight: 1.6,
  marginBottom: '16px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '18px',
      marginBottom: '12px',
    },
    'screen and (max-width: 480px)': {
      fontSize: '16px',
    },
  },
})

export const hospitalName = style({
  fontSize: '24px',
  fontWeight: 600,
  color: '#1a1a1a',
  lineHeight: 1.5,
  marginBottom: '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '20px',
      marginBottom: '20px',
    },
    'screen and (max-width: 480px)': {
      fontSize: '18px',
    },
  },
})

export const description = style({
  fontSize: '18px',
  fontWeight: 400,
  color: '#666666',
  lineHeight: 1.7,
  marginBottom: '48px',
  maxWidth: '800px',
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '16px',
      marginBottom: '40px',
    },
    'screen and (max-width: 480px)': {
      fontSize: '15px',
    },
  },
})

export const viewMoreButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 32px',
  backgroundColor: '#14AEFF',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 600,
  textDecoration: 'none',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#0EA5E9',
    transform: 'translateY(-2px)',
  },
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '14px 28px',
      fontSize: '15px',
    },
    'screen and (max-width: 480px)': {
      padding: '12px 24px',
      fontSize: '14px',
    },
  },
})

export const buttonIcon = style({
  width: '20px',
  height: '20px',
  transition: 'transform 0.3s ease',
  selectors: {
    [`${viewMoreButton}:hover &`]: {
      transform: 'translateX(4px)',
    },
  },
  '@media': {
    'screen and (max-width: 480px)': {
      width: '18px',
      height: '18px',
    },
  },
})