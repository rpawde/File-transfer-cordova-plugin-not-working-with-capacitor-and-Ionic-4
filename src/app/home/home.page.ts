import { Component } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private trustHosts: boolean;

  constructor(private file: File, private fileTransfer: FileTransfer) {
    this.trustHosts = true;
  }

  public download() {
    const fileURL = 'https://www.gstatic.com/webp/gallery3/1.sm.png';
    const fullFilePath = this.file.dataDirectory + '1.sm.png';

    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    fileTransfer.download(fileURL, fullFilePath, this.trustHosts)
      .then((_fileEntry: FileEntry) => {
        alert('The file has been successfully downloaded');
      })
      .catch((error: any) => {
        alert(`The file download has failed. Error details: ${JSON.stringify(error)}`);
      });
  }
}
