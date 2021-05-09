﻿using System;

namespace RookieOnlineAssetManagement.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        public string StaffCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime JoinedDate { get; set; }
        public bool Gender { get; set; }
        public bool Type { get; set; }
        public bool Disable { get; set; }
        public string Password{get;set;}
    }
}
