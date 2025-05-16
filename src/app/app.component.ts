import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    QRCodeComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'iqrcode';
  inputText = '';
  qrcode = '';
  logoUrl = '';
  setQR() {
    this.qrcode=this.inputText;
  }
}
