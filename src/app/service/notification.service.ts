import {Injectable} from '@angular/core';

declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
  }

  showSuccessMsg(msg) {
    Swal.fire(
      'Success!',
      `${msg}`,
      'success'
    );
  }
}
