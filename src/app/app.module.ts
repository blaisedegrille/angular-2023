import { NgModule, isDevMode } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './pages/layout.module';
import { SampleComponent } from './sample/sample.component';
import { ModeToggleModule } from './shared/mode-toggle/mode-toggle.module';
import { SharedModule } from './shared/shared.module';

import { provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { NgChartsModule } from 'ng2-charts';
import { environment } from 'src/environments/environment';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBlAtDNjjp49JdGiNI687twaaCQ2EBIa9c',
  authDomain: 'angular-2023-bb816.firebaseapp.com',
  projectId: 'angular-2023-bb816',
  storageBucket: 'angular-2023-bb816.appspot.com',
  messagingSenderId: '1090245849483',
  appId: '1:1090245849483:web:2f2713aa29cc6ba381ff8e',
  measurementId: 'G-165ERMPD4K',
};

// Initialize Firebase

/* const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app); */
@NgModule({
  declarations: [AppComponent, SampleComponent],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ModeToggleModule,
    NgChartsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
