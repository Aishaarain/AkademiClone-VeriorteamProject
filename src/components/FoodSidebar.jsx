import React from 'react';

const FoodMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Beef Steak with Fried Potato',
      description: 'Served with salad and sauce',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Main Course',
    },
    {
      id: 2,
      name: 'Pancake with Honey',
      description: 'Fresh pancakes with organic honey',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Dessert',
    },
    {
      id: 3,
      name: 'Japanese Rice Ramen',
      description: 'Traditional Japanese ramen bowl',
      image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Main Course',
    },
  ];

  return (
    <div className=" p-6 ">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Current Foods Menu</h3>
        <span className="text-blue-600 text-sm cursor-pointer hover:underline">View More</span>
      </div>
      
      <div className="space-y-4">
        {menuItems.map((item) => (
          <div key={item.id} className="flex space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full mt-2">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;