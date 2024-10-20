const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    feedback_img: { type: [String] }, // Mảng chứa nhiều hình ảnh
    rating: { type: Number, required: true },
    replied_by_admin: { type: String }
  },
  {
    timestamps: true
  }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
