﻿using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RookieOnlineAssetManagement.Entities;
using RookieOnlineAssetManagement.Models;

namespace RookieOnlineAssetManagement.Data
{
    public class ApplicationDbContext : IdentityDbContext<User, IdentityRole<int>, int>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Asset> Assets { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Returning> Returnings { get; set; }
         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Assignment>()
                .HasOne(p => p.Borrower)
                .WithMany(c => c.BorrowerAssets)
                .HasForeignKey(m => m.BorrowerId)
                .OnDelete(DeleteBehavior.Restrict)
                .IsRequired();

            modelBuilder.Entity<Assignment>()
               .HasOne(p => p.Lender)
               .WithMany(c => c.LenderAssets)
               .HasForeignKey(m => m.LenderId)
               .OnDelete(DeleteBehavior.Restrict)
               .IsRequired();
            modelBuilder.Entity<Returning>()
               .HasOne(p => p.UserAccept)
               .WithMany(c => c.UserAcceptAssets)
               .HasForeignKey(m => m.UserAccepteId)
               .OnDelete(DeleteBehavior.Restrict)
               .IsRequired();
                modelBuilder.Entity<User>().HasData(
                    new User { Id = 1, StaffCode = "SD0001", Gender = true, Type = true, DateOfBirth = new DateTime(1999, 2, 13), 
                    JoinedDate = new DateTime(2021, 3, 15), UserName = "dattt", PasswordHash = "1", FirstName = "Dat", 
                    LastName = "Tran Thanh",Location="HCM" });
                modelBuilder.Entity<User>().HasData(
                    new User { Id = 2, StaffCode = "SD0002", Gender = true, Type = true, DateOfBirth = new DateTime(1999, 2, 13), 
                    JoinedDate = new DateTime(2021, 3, 15), UserName = "vuongnv", PasswordHash = "1", FirstName = "Vuong", 
                    LastName = "Nguyen Van",Location="HN" });
        }
    }
}
