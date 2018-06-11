const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'vue_chat', // 数据库名
  'root',   // 用户名
  'root',   // 用户密码
  {
      'dialect': 'mysql',  // 数据库使用mysql
      'host': 'localhost', // 数据库服务器ip
      'port': 3306,        // 数据库服务器端口
      'define': {
          // 字段以下划线（_）来分割（默认是驼峰命名风格）
          'underscored': true
      }
  }
);

const poetrylist = sequelize.define(
  'poetrylist',
  {
    'content': {
      'type': Sequelize.STRING,
      'allowNull': false
    },
    'create_temp': {
      'type': Sequelize.STRING,
      'allowNull': false
    },
    'star': {
      'type': Sequelize.BIGINT,
      'allowNull': false
    },
    'recommend': {
      'type': Sequelize.BIGINT,
      'allowNull': false
    },
    'poetrylist_id': {
      'type': Sequelize.CHAR(64),
      'allowNull': false
    }
  }
)
poetrylist.sync();



const account = sequelize.define(
  // tablename
  'account',
  {
    'user_name': {
      'type': Sequelize.STRING,
      'allowNull': false
    },
    'pwd': {
      'type': Sequelize.STRING,
      'allowNull': false
    },
    'email': {
      'type': Sequelize.STRING,
      'allowNull': true
    },
    'avatar': {
      'type': Sequelize.STRING,
      'allowNull': true
    },
    'user_info': {
      'type': Sequelize.STRING,
      'allowNull': true
    },
    'userid': {
      'type': Sequelize.CHAR(64),
      'allowNull': false,
      'unique': true
    },
    'create_temp': {
      'type': Sequelize.STRING,
      'allowNull': false,
      'unique': true
    }
  }
)
account.sync();



sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});


module.exports = sequelize