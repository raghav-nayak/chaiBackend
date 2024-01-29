const categorySchema = new mongoose.categorySchema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const Category = mongoose.model("Category", categorySchema);