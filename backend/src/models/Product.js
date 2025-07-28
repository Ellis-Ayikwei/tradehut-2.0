import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        maxLength: [2000, 'Description cannot exceed 2000 characters']
    },
    shortDescription: {
        type: String,
        maxLength: [500, 'Short description cannot exceed 500 characters']
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        enum: [
            'smartphones',
            'laptops',
            'tablets',
            'accessories',
            'repair-services',
            'it-services',
            'software',
            'other'
        ]
    },
    subcategory: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
        trim: true
    },
    model: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    comparePrice: {
        type: Number,
        min: [0, 'Compare price cannot be negative']
    },
    costPrice: {
        type: Number,
        min: [0, 'Cost price cannot be negative']
    },
    currency: {
        type: String,
        default: 'GHS',
        enum: ['GHS', 'USD', 'EUR']
    },
    sku: {
        type: String,
        unique: true,
        sparse: true,
        trim: true
    },
    barcode: {
        type: String,
        sparse: true,
        trim: true
    },
    images: [{
        url: {
            type: String,
            required: true
        },
        altText: String,
        isPrimary: {
            type: Boolean,
            default: false
        }
    }],
    specifications: {
        type: Map,
        of: String
    },
    features: [String],
    inventory: {
        quantity: {
            type: Number,
            required: [true, 'Inventory quantity is required'],
            min: [0, 'Quantity cannot be negative'],
            default: 0
        },
        lowStockThreshold: {
            type: Number,
            default: 5
        },
        trackQuantity: {
            type: Boolean,
            default: true
        },
        allowBackorder: {
            type: Boolean,
            default: false
        }
    },
    weight: {
        value: Number,
        unit: {
            type: String,
            enum: ['kg', 'g', 'lb'],
            default: 'kg'
        }
    },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
        unit: {
            type: String,
            enum: ['cm', 'in'],
            default: 'cm'
        }
    },
    seo: {
        metaTitle: String,
        metaDescription: String,
        metaKeywords: [String]
    },
    status: {
        type: String,
        enum: ['draft', 'active', 'inactive', 'archived'],
        default: 'draft'
    },
    featured: {
        type: Boolean,
        default: false
    },
    tags: [String],
    warranty: {
        duration: Number,
        unit: {
            type: String,
            enum: ['days', 'months', 'years'],
            default: 'months'
        },
        terms: String
    },
    supplier: {
        name: String,
        contact: String,
        email: String
    },
    rating: {
        average: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        count: {
            type: Number,
            default: 0
        }
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    relatedProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    isDigital: {
        type: Boolean,
        default: false
    },
    downloadableFiles: [{
        name: String,
        url: String,
        size: Number
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Indexes for better performance
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, status: 1 });
productSchema.index({ brand: 1 });
productSchema.index({ sku: 1 });
productSchema.index({ featured: 1, status: 1 });
productSchema.index({ price: 1 });
productSchema.index({ 'rating.average': -1 });
productSchema.index({ createdAt: -1 });

// Virtual for discount percentage
productSchema.virtual('discountPercentage').get(function() {
    if (this.comparePrice && this.comparePrice > this.price) {
        return Math.round(((this.comparePrice - this.price) / this.comparePrice) * 100);
    }
    return 0;
});

// Virtual for in stock status
productSchema.virtual('inStock').get(function() {
    if (!this.inventory.trackQuantity) return true;
    return this.inventory.quantity > 0 || this.inventory.allowBackorder;
});

// Virtual for low stock status
productSchema.virtual('lowStock').get(function() {
    if (!this.inventory.trackQuantity) return false;
    return this.inventory.quantity <= this.inventory.lowStockThreshold;
});

// Pre-save middleware to generate slug
productSchema.pre('save', function(next) {
    if (this.isModified('name')) {
        this.slug = this.name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }
    next();
});

// Pre-save middleware to set primary image
productSchema.pre('save', function(next) {
    if (this.images && this.images.length > 0) {
        // If no primary image is set, make the first one primary
        const hasPrimary = this.images.some(img => img.isPrimary);
        if (!hasPrimary) {
            this.images[0].isPrimary = true;
        }
    }
    next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;