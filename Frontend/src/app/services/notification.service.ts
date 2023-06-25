import { Injectable } from '@angular/core';
   
import { ToastrService } from 'ngx-toastr';
import 'node_modules/ngx-toastr'
   
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
   
  constructor(private toastr: ToastrService) {    
    this.toastr.toastrConfig.positionClass = 'toast-bottom-center'
   }
   
  showSuccess(message: string, title: string){
      this.toastr.success(message, title)
  }
   
  showError(message: string, title: string){
      this.toastr.error(message, title)
  }
   
  showInfo(message: string, title: string){
      this.toastr.info(message, title)
  }
   
  showWarning(message: string, title: string){
      this.toastr.warning(message, title)
  }
   
}