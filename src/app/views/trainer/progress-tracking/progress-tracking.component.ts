import { Component } from '@angular/core';
import { TrackHeaderComponent } from "../../../features/trainer/progression-tracking/track-header/track-header.component";
import { TrackingListComponent } from "../../../features/trainer/progression-tracking/tracking-list/tracking-list.component";

@Component({
  selector: 'app-progress-tracking',
  standalone: true,
  imports: [TrackHeaderComponent, TrackingListComponent],
  templateUrl: './progress-tracking.component.html',
  styleUrl: './progress-tracking.component.scss'
})
export class ProgressTrackingComponent {

}
