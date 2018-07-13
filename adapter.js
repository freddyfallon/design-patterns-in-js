const fakeDbAdapter = db => ({
  getAll: () => {
    db.returnAllRecords()
  },
  delete: (id) => {
    db.deleteOneRecord(id)
  }
})

module.exports = fakeDbAdapter