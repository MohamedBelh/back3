import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseDto } from '../models/responce/ProductResponceModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:5000/api/products'; 

  getAllProducts(): Observable<ProductResponseDto[]> {
    return this.http.get<ProductResponseDto[]>(this.baseUrl);
  }
}
