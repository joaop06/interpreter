export type En = {
  SUCCESS: {
    RESOURCE: {
      FOUND: string;
      CREATED: string;
      DELETED: string;
      UPDATED: string;
    };
  };
  ERRORS: {
    MODULES: {
      APPOINTMENTS: {
        CREATE: {
          OVER_LAPPING: string;
        };
      };
    };
    COMMON: {
      NOT_FOUND: string;
      BAD_REQUEST: string;
      CONFLICT: string;
      ALREADY_EXISTS: string;
      INTERNAL_SERVER_ERROR: string;
      INVALID_TRANSLATE_CODE: string;
    };
    VALIDATION: {
      REQUIRED: string;
      STRING: {
        MIN: string;
        MAX: string;
        EMAIL: string;
      };
      NUMBER: {
        MIN: string;
        MAX: string;
        INTEGER: string;
      };
      DATE: {
        INVALID: string;
        FUTURE: string;
        PAST: string;
      };
    };
    AUTH: {
      INVALID_CREDENTIALS: string;
      UNAUTHORIZED: string;
      TOKEN_EXPIRED: string;
      TOKEN_INVALID: string;
    };
    RESOURCE: {
      CREATE: string;
      DELETE: string;
      FIND: string;
      UPDATE: string;
    };
    DATABASE: {
      CONNECTION: string;
      QUERY: string;
      CONSTRAINT: string;
    };
  };
  NOTIFICATIONS: {
    EMAIL: {
      SENT: string;
      FAILED: string;
    };
    PUSH: {
      SENT: string;
      FAILED: string;
    };
  };
  COMMON: {
    LOADING: string;
    PROCESSING: string;
    NO_RESULTS: string;
    WELCOME: string;
    GOODBYE: string;
  };
};