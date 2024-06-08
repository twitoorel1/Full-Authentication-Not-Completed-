export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  role: string;
  last_connected?: string | Date | number | any;

  created_at: string;
  updated_at: string;
}

// interface Auth State Redux
export interface IAuthState {
  // Status
  isLoading: boolean;
  isAuthenticated: boolean;
  isError: boolean;

  // From Server
  message: string | null;
  token: string | null;
  user: IUser | null;
}

export interface IFormLoginInputs {
  username: string;
  password: string;
}
