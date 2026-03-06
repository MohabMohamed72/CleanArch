import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../Services/UserService/user-service';

export const headerInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService);
  const lang = localStorage.getItem('lang') || 'ar';
  // const token = userService.user()?.token;
  const token = '2199|jjG0mTe5g7t1aq8j8GDMbqLDcj7lmXN7cCHW433Cb36e0725';

  const authReq = req.clone({
    setHeaders: {
      'Accept-Language': lang || `*`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      // 'web-domain': getWebDomain(),
      // ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return next(authReq);
};
