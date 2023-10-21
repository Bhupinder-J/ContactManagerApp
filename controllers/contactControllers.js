const asyncHandler = require("express-async-handler");

// @desc Get All Contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all Contacts" });
});

// @desc Get All Contacts
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get Contact : ${req.params.id}` });
});

// @desc Create Contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, phone } = req.body;
    if (!name || !phone) {
        res.status(400);
        throw err = new Error("All fields required !!");
    }
    res.status(201).json({ message: `Contact created : ${req.body}` });
});

// @desc Update Contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Contact Updated : ${req.params.id}` });
});

// @desc Delete Contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Contact Deleted : ${req.params.id}` });
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};