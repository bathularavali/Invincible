import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private endpoint = this.apiUrl;
  constructor(@Inject('BACKEND_API_URL') private apiUrl: string) {
    this.socket = io(this.endpoint);
  }

  public onEvent(event): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, data => observer.next(data));
    });
  }
}
