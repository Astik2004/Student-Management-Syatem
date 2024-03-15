const userModel=require("../model/userSchema");
const deleteUser = async (req, res) =>
{
    const userId = req.params.id; 

    try {
      const deleteUser = await userModel.deleteOne({_id:userId});
      
      if (!deleteUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting Ticket:', error);
      return res.status(500).json({ error: 'Server error' });
    }
}

module.exports = deleteUser;