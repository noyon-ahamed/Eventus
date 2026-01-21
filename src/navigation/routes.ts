export const ROUTES = {
  // Auth Stack
  LOGIN: 'Login',
  REGISTER: 'Register',

  // App Stack
  DISPATCH_DASHBOARD: 'DispatchDashboard',
  LOAD_BOARD: 'LoadBoard',
  ASSIGN_LOAD: 'AssignLoad',
  ACTIVE_DRIVER: 'ActiveDriver',

  // Stacks (Groups of screens)
  AUTH_STACK: 'AuthStack',
  APP_STACK: 'AppStack',
} as const;
