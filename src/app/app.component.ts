import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from "./binding/binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MonProjet';
}
