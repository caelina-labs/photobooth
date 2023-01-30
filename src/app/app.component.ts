import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';

interface Project {
  images: string[];

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
    ::ng-deep video {
      width:100vw;
      height: 100vh;
      object-fit: cover;
    }
    ::ng-deep .webcam-wrapper{
      display:block !important;
    }
    `
  ]
})
export class AppComponent {

  project: Project = {images:[]}
  view: "camera" | "photo" = "camera";

  interval: any;


  count = -1;
  inProgress?: boolean;
  public trigger: Subject<void> = new Subject();
  title = 'photobooth';


  public handleImage(webcamImage: WebcamImage): void {
    console.log(webcamImage);
    this.view = "photo";
    this.project.images.push(webcamImage.imageAsDataUrl);
  }

  public triggerNewPhoto(){
    this.inProgress = true;
    this.count = 1;
    this.triggerCountdown();
  }

  private triggerCountdown(){
    this.interval = setInterval(() => {
      if(this.count === -1){
        clearInterval(this.interval);
        return;
      }

      if(this.count === 0){
        this.takeSnapshop();
      }

      this.count--;
    }, 1000)
  }

  private takeSnapshop(){
    this.trigger.next();
  }

  public reset(){
    this.inProgress = false;
    this.count = -1;
    clearInterval(this.interval);
  }


  get lastPhoto(){
    return this.project.images.slice(-1)[0] || "";
  }
}
