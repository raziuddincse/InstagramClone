import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class instaApiService
{
    constructor(private httpclient: HttpClient){}
    getimages(): Observable<any> {
        return this.httpclient.get("http://starlord.hackerearth.com/insta");


    }
}