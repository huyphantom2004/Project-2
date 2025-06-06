const express = require("express");

const router = express.Router();

// Import các router khác
const authRoutes = require("./auth.router");
const tourRoutes = require("./tour.router");
const bookingRoutes = require("./booking.router");
const cartRoutes = require("./cart.router");
const categotyRoutes = require("./category.router");
const employeeRoutes = require("./employee.router");
const customerRoutes = require("./customer.router");
const wishlistRoutes = require("./wishlist.router");
const notificationRoutes = require("./notification.router");
const paymentRoutes = require("./payment.router");
const promotionRoutes = require("./promotion.router");
const refundRoutes = require("./refund.router");
const reviewRoutes = require("./review.router");

// Định nghĩa các router chính
router.use("/auth", authRoutes);
router.use("/tours", tourRoutes);
router.use("/bookings", bookingRoutes);
router.use("/carts", cartRoutes);
router.use("/categories", categotyRoutes);
router.use("/employees", employeeRoutes);
router.use("/customers", customerRoutes);
router.use("/wishlists", wishlistRoutes);
router.use("/notifications", notificationRoutes);
router.use("/payments", paymentRoutes);
router.use("/promotions", promotionRoutes);
router.use("/refunds", refundRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
