import { Injectable } from "@angular/core";

import { HomePage } from '../pages/home/home';
import {  NotificationPage } from '../pages/notifications/notifications';
import { PreferencesPage } from './../pages/preferences/preferences';
import { DocumentsPage } from './../pages/documents/document';
import { EnquieryPage } from '../pages/enquirey/enquirey';
import { TasksPage } from '../pages/tasks/tasks';
import { LoginPage } from './../pages/login/login';


@Injectable()
export class AuthServices {

    private isAuthenticated: boolean = false;
    private pages: Array<PageObj>;
    private usr: userObj;

    setAuthentication(flag: boolean){
        this.isAuthenticated = flag;
    }

    getAuthentication(){
        return this.isAuthenticated;
    }

    setPages(auth: boolean){
        this.pages = [
            { title: 'Home', component: HomePage, icon_md: 'home', authFlg: false },
            { title: 'Notifications', component: NotificationPage, icon_md: 'notifications', authFlg: auth  },
            { title: 'Tasks', component: TasksPage, icon_md: 'checkbox-outline', authFlg: auth  },
            { title: 'Enquire Accounts', component: EnquieryPage, icon_md: 'search', authFlg: auth  },
            { title: 'Documents', component: DocumentsPage, icon_md: 'document', authFlg: auth  },
            { title: 'Preferences', component: PreferencesPage, icon_md: 'cog', authFlg: auth  },
            { title: 'Login', component: LoginPage, icon_md: 'log-in', authFlg: !auth  }
          ];
    }

    getPages(){
        return this.pages;
    }

    getLoggedInn(){
        if(this.usr != null && this.usr != undefined){
             if(this.usr.userName != null && this.usr.userName != undefined && this.usr.password != undefined  && this.usr.password != null){
                 return true;
             }
         }
    }

    saveUsr(usrNm: string, pass: string ){
        this.usr = {userName: usrNm, password: pass};
        //this.usr.userName = usrNm;
        //this.usr.password = pass;
    }

}

interface PageObj{
    title: string,
    component: any,
    icon_md: string,
    authFlg: boolean
  }

  interface userObj {
      userName: string,
      password: string
  }