import { Component, AfterViewInit, OnDestroy, NgZone} from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { IdentityService } from './shared/identity.service';
import { Identity } from './shared/identity';
import { Entry } from './shared/entry'

declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy, AfterViewInit {

    private isAlive = true;

    public identity: Identity;

    public googleLoginButtonId = 'google-login-button';

    constructor(
        private identityService: IdentityService,
        private zone: NgZone,
        private identitySvc: IdentityService,
        private afDb: AngularFireDatabase
    ) {
        this.identityService.$identity
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(identity => {
                if (identity) {
                    this.identity = identity;
                }
        });
    }

  ngAfterViewInit() {
        // Converts the Google login button stub to an actual button.
        gapi.signin2.render(
            this.googleLoginButtonId,
            {
                'onSuccess': (loggedInUser: any) => this.setLoggedUser(loggedInUser),
                'scope': 'profile',
                'theme': 'dark'
            });
    }

    public logout(): void {
        gapi.auth2.getAuthInstance()
            .signOut()
            .then(() => {
                this.zone.run(() => {
                    this.identitySvc.setIdentity(null);
                    window.location.reload();
                });
            });
    }

    private setLoggedUser(loggedInUser: any) {
        this.zone.run(() => {
            const profile = loggedInUser.getBasicProfile();
            this.identitySvc.setIdentity({
                id: profile.getId(),
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl()
            });
        });
    }

    ngOnDestroy(): void {
        this.isAlive = false;
    }
}
