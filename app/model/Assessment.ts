import mongoose from 'mongoose';

const AssessmentSchema = new mongoose.Schema(
  {
    step1: Object,
    step2: Object,
    step3: Object,
    step4: Object,
    recommendation: Object,
    contact: {
      name: String,
      email: String,
      phone: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Assessment || mongoose.model('Assessment', AssessmentSchema);
