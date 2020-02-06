import {
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {Post} from "../app.component";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    // encapsulation: ViewEncapsulation.None // delete style hash
})
export class PostComponent implements OnInit {
    @Input() post: Post;
    @Output() onRemove = new EventEmitter<number>();
    @ContentChild('info', {static: true}) infoRef: ElementRef;

    constructor() { }

    ngOnInit() {
        console.log(this.infoRef.nativeElement)
    }
    removePost() {
        this.onRemove.emit(this.post.id)
    }

}
