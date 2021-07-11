const { S3UploaderModel, sequelize } = require('./S3UploaderModel');
const op = sequelize.Op;
exports.deleteAllFiles = async function() {
  return await S3UploaderModel.destroy({
    where: {},
    truncate: true
  });
};

exports.softDeleteAllFiles = async function() {
  return await S3UploaderModel.update(
    { action_type: 'DELETE_FILE', connectivity: 0, is_deleted: 1 },
    { where: {} }
  );
};

exports.deleteFile = async function(id) {
  return await S3UploaderModel.destroy({ where: { _id: id } });
};

exports.updateFile = async function(model) {
  let items = await S3UploaderModel.findOne({ where: { _id: model._id } });
  return items.update(model, { where: { _id: model._id } });
};

exports.getFileInfoById = async function(id) {
  const items = await S3UploaderModel.findOne({ where: { _id: id } });
  return items;
};

exports.createModalAndGetAllFiles = async function() {
  return await sequelize.sync().then(async () => {
    const items = await S3UploaderModel.findAll();
    if (!items.length) {
      return await S3UploaderModel.create({
        s3_url: 'test',
        local_url: 'test'
      }).then(async item => {
        return this.getAllFiles();
      });
    } else {
      return this.getAllFiles();
    }
  });
};

exports.getAllFiles = async function() {
  const items = await S3UploaderModel.findAll({
    where: {
      is_deleted: 0,
      file_name: {
        [op.ne]: null
      }
    },
    order: [['uploaded_on', 'DESC']]
  });
  return items.map(e => e.toJSON());
};

exports.newFile = function(fileObj) {
  return S3UploaderModel.create(fileObj);
};
