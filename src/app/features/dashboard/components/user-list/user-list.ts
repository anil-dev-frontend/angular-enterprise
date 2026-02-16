import { Component, OnInit } from '@angular/core';
import { Auth } from '@features/auth/auth-service/auth';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';
import { ReusableTabel } from '@shared/components/reusable-tabel/reusable-tabel';

@Component({
  selector: 'app-user-list',
  imports: [SHARED_IMPORTS, ReusableTabel],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList implements OnInit {

  users: any[] = [];
  columns: any[] = [];
  loading = false;

  constructor(private authService: Auth) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // getUsers() {
  //   this.loading = true;
  //   this.authService.getAllUsers().subscribe({
  //     next: (res: any) => {
  //       console.log("API Response:", res);
  //       this.users = res.data || [];
  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       console.error(err);
  //       alert("Unauthorized! Please login again.");
  //       this.loading = false;
  //     }
  //   });
  // }

  getUsers() {
    this.loading = true;

    this.authService.getAllUsers().subscribe({
      next: (res: any) => {
        const all = res.data || [];
        this.users = all.map((u: any) => ({
          emailId: u.emailId,
          fullName: u.fullName
        }));

        // Fully Dynamic Columns
        if (this.users.length > 0) {
          this.columns = Object.keys(this.users[0]).map(key => ({
            key,
            label: this.toLabel(key)
          }));
        }

        this.loading = false;
      },
      error: () => {
        alert("Unauthorized! Please login again.");
        this.loading = false;
      }
    });
  }

  toLabel(key: string): string {
    return key.replace(/([A-Z])/g, ' $1')
      .replace(/^./, s => s.toUpperCase());
  }

  // ---------- ACTION HANDLERS ----------
  onEdit(row: any) {
    console.log("Edit:", row);
    alert("Edit clicked: " + row.fullName);
  }

  onDelete(row: any) {
    console.log("Delete:", row);
    alert("Delete clicked: " + row.fullName);
  }
}