import mongoose from 'mongoose';

const repairJobSchema = new mongoose.Schema({
    jobNumber: {
        type: String,
        unique: true,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Customer is required']
    },
    device: {
        type: {
            type: String,
            required: [true, 'Device type is required'],
            enum: ['smartphone', 'laptop', 'tablet', 'desktop', 'smartwatch', 'other']
        },
        brand: {
            type: String,
            required: [true, 'Device brand is required'],
            trim: true
        },
        model: {
            type: String,
            required: [true, 'Device model is required'],
            trim: true
        },
        serialNumber: {
            type: String,
            trim: true
        },
        imei: {
            type: String,
            trim: true
        },
        color: String,
        accessories: [String] // charger, case, etc.
    },
    issueDescription: {
        type: String,
        required: [true, 'Issue description is required'],
        maxLength: [1000, 'Issue description cannot exceed 1000 characters']
    },
    problemCategory: {
        type: String,
        required: true,
        enum: [
            'screen-damage',
            'battery-issue',
            'charging-problem',
            'water-damage',
            'software-issue',
            'hardware-failure',
            'network-issue',
            'performance-issue',
            'data-recovery',
            'virus-removal',
            'other'
        ]
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'urgent'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: [
            'pending',
            'received',
            'diagnosed',
            'approved',
            'in-progress',
            'waiting-parts',
            'completed',
            'ready-pickup',
            'delivered',
            'cancelled',
            'warranty-claim'
        ],
        default: 'pending'
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    diagnosis: {
        description: String,
        estimatedCost: {
            type: Number,
            min: [0, 'Estimated cost cannot be negative']
        },
        estimatedTime: {
            value: Number,
            unit: {
                type: String,
                enum: ['hours', 'days', 'weeks'],
                default: 'days'
            }
        },
        diagnosedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        diagnosedAt: Date,
        images: [String]
    },
    approval: {
        isApproved: {
            type: Boolean,
            default: false
        },
        approvedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        approvedAt: Date,
        customerNotes: String
    },
    cost: {
        labor: {
            type: Number,
            default: 0,
            min: [0, 'Labor cost cannot be negative']
        },
        parts: {
            type: Number,
            default: 0,
            min: [0, 'Parts cost cannot be negative']
        },
        tax: {
            type: Number,
            default: 0,
            min: [0, 'Tax cannot be negative']
        },
        discount: {
            type: Number,
            default: 0,
            min: [0, 'Discount cannot be negative']
        },
        total: {
            type: Number,
            default: 0,
            min: [0, 'Total cost cannot be negative']
        }
    },
    parts: [{
        name: {
            type: String,
            required: true
        },
        partNumber: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity must be at least 1']
        },
        unitCost: {
            type: Number,
            required: true,
            min: [0, 'Unit cost cannot be negative']
        },
        supplier: String,
        warranty: {
            duration: Number,
            unit: {
                type: String,
                enum: ['days', 'months', 'years'],
                default: 'months'
            }
        }
    }],
    timeline: [{
        status: String,
        description: String,
        timestamp: {
            type: Date,
            default: Date.now
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    communication: [{
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        message: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['note', 'sms', 'email', 'call'],
            default: 'note'
        },
        timestamp: {
            type: Date,
            default: Date.now
        },
        attachments: [String]
    }],
    images: [{
        url: String,
        description: String,
        type: {
            type: String,
            enum: ['before', 'during', 'after', 'damage'],
            default: 'before'
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }],
    warranty: {
        duration: {
            type: Number,
            default: 30
        },
        unit: {
            type: String,
            enum: ['days', 'months', 'years'],
            default: 'days'
        },
        terms: String,
        startDate: Date,
        endDate: Date
    },
    payment: {
        method: {
            type: String,
            enum: ['cash', 'card', 'mobile-money', 'bank-transfer', 'pending'],
            default: 'pending'
        },
        status: {
            type: String,
            enum: ['pending', 'partial', 'paid', 'refunded'],
            default: 'pending'
        },
        paidAmount: {
            type: Number,
            default: 0,
            min: [0, 'Paid amount cannot be negative']
        },
        transactions: [{
            amount: Number,
            method: String,
            reference: String,
            timestamp: {
                type: Date,
                default: Date.now
            }
        }]
    },
    feedback: {
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        comment: String,
        submittedAt: Date
    },
    expectedDelivery: Date,
    actualDelivery: Date,
    notes: String,
    isUrgent: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Indexes for better performance
repairJobSchema.index({ jobNumber: 1 });
repairJobSchema.index({ customer: 1 });
repairJobSchema.index({ status: 1 });
repairJobSchema.index({ assignedTo: 1 });
repairJobSchema.index({ createdAt: -1 });
repairJobSchema.index({ expectedDelivery: 1 });
repairJobSchema.index({ priority: 1, status: 1 });

// Virtual for days since created
repairJobSchema.virtual('daysOld').get(function() {
    const diffTime = Math.abs(new Date() - this.createdAt);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Virtual for remaining balance
repairJobSchema.virtual('remainingBalance').get(function() {
    return Math.max(0, this.cost.total - this.payment.paidAmount);
});

// Virtual for warranty status
repairJobSchema.virtual('warrantyStatus').get(function() {
    if (!this.warranty.endDate) return 'no-warranty';
    const now = new Date();
    if (now <= this.warranty.endDate) return 'active';
    return 'expired';
});

// Pre-save middleware to generate job number
repairJobSchema.pre('save', async function(next) {
    if (this.isNew) {
        const date = new Date();
        const year = date.getFullYear().toString().slice(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        
        // Find the last job number for this month
        const lastJob = await this.constructor.findOne({
            jobNumber: new RegExp(`^TH${year}${month}`)
        }).sort({ jobNumber: -1 });
        
        let sequence = 1;
        if (lastJob) {
            const lastSequence = parseInt(lastJob.jobNumber.slice(-4));
            sequence = lastSequence + 1;
        }
        
        this.jobNumber = `TH${year}${month}${sequence.toString().padStart(4, '0')}`;
    }
    next();
});

// Pre-save middleware to calculate total cost
repairJobSchema.pre('save', function(next) {
    this.cost.total = this.cost.labor + this.cost.parts + this.cost.tax - this.cost.discount;
    next();
});

// Pre-save middleware to set warranty dates
repairJobSchema.pre('save', function(next) {
    if (this.status === 'completed' && !this.warranty.startDate) {
        this.warranty.startDate = new Date();
        
        const duration = this.warranty.duration;
        const unit = this.warranty.unit;
        const endDate = new Date(this.warranty.startDate);
        
        if (unit === 'days') {
            endDate.setDate(endDate.getDate() + duration);
        } else if (unit === 'months') {
            endDate.setMonth(endDate.getMonth() + duration);
        } else if (unit === 'years') {
            endDate.setFullYear(endDate.getFullYear() + duration);
        }
        
        this.warranty.endDate = endDate;
    }
    next();
});

const RepairJob = mongoose.model('RepairJob', repairJobSchema);

export default RepairJob;