import mongoose from "mongoose"

const OrdersSchema = new mongoose.Schema(
  {
    Shirts: [
        {
            Quantity:{type:Number,required:true},
            Washtype:[{
                washingmachine:{
                    type:Boolean,
                    required:true,
                    default:true,
                },

                iron:{
                    type:Boolean,
                    required:true,
                    default:false,
                },

                towel:{
                    type:Boolean,
                    required:true,
                    default:false,
                },

                bleach:{
                    type:Boolean,
                    required:true,
                    default:false,
                }
            }],
        }
    ],

    TShirts: [
        {
          username: String,
          createdAt: String
        }
      ],
      
    Trousers: [
        {
          username: String,
          createdAt: String
        }
    ],

    Jeans: [
        {
          username: String,
          createdAt: String
        }
    ],

    Boxers: [
        {
          username: String,
          createdAt: String
        }
    ],

    Joggers: [
        {
          username: String,
          createdAt: String
        }
    ],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },

    price:{
        type:Number,
        required:true,
        default:0,
    }

})

const Order = mongoose.model("orders",OrdersSchema)

export default Order