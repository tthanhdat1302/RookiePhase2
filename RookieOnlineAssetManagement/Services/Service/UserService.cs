using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using RookieOnlineAssetManagement.Data;
using RookieOnlineAssetManagement.Entities;
using RookieOnlineAssetManagement.Models.User;
using RookieOnlineAssetManagement.Services.Interface;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RookieOnlineAssetManagement.Services.Service
{
    public class UserService : IUserService
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;

        public UserService(ILogger<UserService> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            return await _dbContext.Users
                .Select(x => new UserModel { Id = x.Id, StaffCode = x.StaffCode, FirstName = x.FirstName, LastName = x.LastName, UserName = x.UserName, DateOfBirth = x.DateOfBirth, Gender = x.Gender, JoinedDate = x.JoinedDate, Type = x.Type, Disable = x.Disable }).Where(x => x.Disable == false)
                .ToListAsync();
        }
        public async Task<ActionResult<UserModel>> GetUsersById(int id)
        {
            return await _dbContext.Users
                .Select(x => new UserModel { Id = x.Id, StaffCode = x.StaffCode, FirstName = x.FirstName, LastName = x.LastName, UserName = x.UserName, DateOfBirth = x.DateOfBirth, Gender = x.Gender, JoinedDate = x.JoinedDate, Type = x.Type, Disable = x.Disable }).FirstOrDefaultAsync(x => x.Disable == false && x.Id == id);
        }

        public async Task CreateUser(CreateUserModel createUserModel)
        {
            string[] userNameSplit = createUserModel.LastName.Split(' ');
            string userName = "";
            var userNameSub = "";
            foreach (var name in userNameSplit)
            {
                string lower = name.ToLower();
                userName += lower.Substring(0, 1);
            }
            var find = _dbContext.Users.Where(x => x.FirstName.Equals(createUserModel.FirstName) && x.LastName.Equals(createUserModel.LastName)).ToList();
            var count = find.Count();
            if (count != 0)
            {
                userNameSub = createUserModel.FirstName.ToLower() + userName + count;
            }
            else
            {
                userNameSub = createUserModel.FirstName.ToLower() + userName;
            }

            var user = new User
            {
                FirstName = createUserModel.FirstName,
                LastName = createUserModel.LastName,
                UserName = userNameSub,
                DateOfBirth = createUserModel.DateOfBirth,
                JoinedDate = createUserModel.JoinedDate,
                Gender = createUserModel.Gender,
                Type = createUserModel.Type,
                Disable = false,
                PasswordHash = "1"
            };

            _dbContext.Users.Add(user);
            await _dbContext.SaveChangesAsync();

            char x = '0';
            string id = user.Id.ToString().PadLeft(4, x);
            user.StaffCode = "SD" + id;

            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateUser(int id, CreateUserModel createUserModel)
        {
            var selectUser = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            selectUser.DateOfBirth = createUserModel.DateOfBirth;
            selectUser.Gender = createUserModel.Gender;
            selectUser.JoinedDate = createUserModel.JoinedDate;
            selectUser.Type = createUserModel.Type;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DisableUser(int id)
        {
            var selectUser = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            selectUser.Disable = true;
            await _dbContext.SaveChangesAsync();
        }
    }
}
