# 🛍️ Shoplo E-commerce Dashboard

A modern, full-featured product dashboard built with **React 19**, **Redux Toolkit**, and **Tailwind CSS**. This application demonstrates proficiency in building scalable frontend applications with comprehensive testing, state management, and responsive design.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?logo=redux)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?logo=tailwindcss)
![Testing](https://img.shields.io/badge/Testing-Vitest_4.0.16-FCC72B?logo=vitest)

## 🎯 Live Demo

🔗 [Deployed Application Link](#) *(Add your Vercel/Netlify/Render link here)*

## ✨ Features

### ✅ **Core Features**
- **Product Listing**: Responsive grid layout with product cards
- **Advanced Search**: Real-time debounced search by product title
- **Smart Filters**: Filter by category with dynamic dropdown
- **Price Sorting**: Sort products by price (Low to High / High to Low)
- **Product Details**: Complete product information page
- **Favorites System**: Add/remove favorites with localStorage persistence
- **Responsive Design**: Mobile-first responsive UI

### ✅ **Technical Features**
- **Modern React**: React 19 with functional components and hooks
- **State Management**: Redux Toolkit with slices, thunks, and selectors
- **Routing**: React Router v7 for seamless navigation
- **API Integration**: Fetch data from Fake Store API with error handling
- **Performance**: Debounced search, memoized selectors, code splitting
- **Testing**: Comprehensive unit and integration tests with Vitest
- **Styling**: Tailwind CSS with custom design system

## 📁 Project Structure

```text
shoplo-dashboard/
├── src/
│   ├── components/            # Reusable UI Components
│   │   ├── ProductCard.jsx    # Individual product card
│   │   ├── ProductGrid.jsx    # Responsive product grid
│   │   ├── SearchBar.jsx      # Debounced search input
│   │   ├── Filters.jsx        # Category filter & price sort
│   │   └── Header.jsx         # Navigation header
│   ├── pages/                 # Page Components
│   │   ├── ProductListingPage.jsx # Main products page
│   │   ├── ProductDetailPage.jsx  # Single product page
│   │   └── FavoritesPage.jsx      # Favorites management
│   ├── store/                 # Redux State Management
│   │   ├── slices/            # Redux slices
│   │   │   ├── productsSlice.js   # Products state
│   │   │   ├── favoritesSlice.js  # Favorites state
│   │   │   └── filtersSlice.js    # Filter state
│   │   ├── selectors/         # Memoized selectors
│   │   │   └── productSelectors.js
│   │   └── index.js           # Store configuration
│   ├── hooks/                 # Custom React Hooks
│   │   ├── useDebounce.js     # Debounce utility hook
│   │   └── useProducts.js     # Products data hook
│   ├── tests/                 # Test Files
│   │   ├── components/        # Component tests
│   │   ├── store/             # Redux slice tests
│   │   └── setup.js           # Test setup configuration
│   ├── assets/                # Static assets
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Application entry
│   └── index.css              # Global styles
├── public/                    # Public assets
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
├── eslint.config.js           # ESLint configuration
└── package.json               # Dependencies & scripts
```


## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd shoplo-dashboard
```

2. **Install dependencies**
```bash
npm install
```
3. **Start development server**
```bash
npm run dev
```
### Available Scripts
| Script  | Description |
| ------------- | ------------- |
| npm run dev  | Start development server  |
| npm run build  | Build for production  |
| npm run preview  | Preview production build  |
| npm test  | Run test suite  |
| npm run lint  | Lint code with ESLint  |

## 🚀 Application Pages

1. **Product Listing Page (/)**

* Responsive grid of product cards
* Debounced search functionality
* Category filtering dropdown
* Price sorting options
* Loading and error states

2. **Product Detail Page (/product/:id)**

* Complete product information
* High-resolution product image
* Product rating and reviews
* Add to favorites functionality
* Add to cart button

3. **Favorites Page (/favorites)**

* List of favorited products
* Remove individual favorites
* Empty state with call-to-action
* Persistent across browser sessions

## 🛠️ Technical Implementation
**State Management (Redux Toolkit)**
```bash
// Example store structure
// Store Structure
{
  products: {
    items: [],        // All products from API
    currentProduct: null, // Currently viewed product
    status: 'idle',   // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  filters: {
    search: '',       // Search term
    category: 'all',  // Selected category
    sort: 'default'   // Sorting option
  },
  favorites: {
    items: []         // Favorite products (persisted in localStorage)
  }
}
```
**Custom Hooks**

* **useDebounce**: Debounces search input (300ms delay)
* **useProducts**: Fetches and manages product data

## API Integration
```bash
// Using Fake Store API
GET https://fakestoreapi.com/products
GET https://fakestoreapi.com/products/categories
GET https://fakestoreapi.com/products/{id}
```
## Performance Optimizations

* Debounced Search: Prevents excessive API calls
* Memoized Selectors: Efficient state derivation
* Image Lazy Loading: Improves page load time
* Code Splitting: Route-based code splitting

## 🧪 Testing

### Test Suite

* **Unit Tests**: Redux slices and selectors
* **Component Tests**: Individual UI components
* **Integration Tests**: User workflows and interactions

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run with coverage report
npm test -- --coverage
```
### Test Coverage
```text
✓ 8+ tests passing
✓ 100% branch coverage for Redux slices
✓ Component tests with React Testing Library
✓ Integration tests for user workflows
```

## 🎨 UI/UX Features
### Responsive Design
* Mobile-first approach
* Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
* Flexible grid layouts

### Accessibility
* Semantic HTML structure
* ARIA labels for interactive elements
* Keyboard navigation support
* Screen reader compatibility

### Design System
* Custom color palette with Tailwind
* Consistent spacing and typography
* Smooth animations and transitions
* Clear visual hierarchy

## 🔧 Development
### Environment Setup
1. Install Node.js 18+
2. Clone repository
3. Run npm install
4. Start development server with npm run dev


## 📈 Future Enhancements
### Planned Features
1. **Shopping Cart**: Full cart functionality with checkout
2. **User Authentication**: Login/registration system
3. **Real Backend**: Replace Fake Store API with Node.js backend
4. **PWA Support**: Install as Progressive Web App
5. **Dark Mode**: Theme switching functionality
6. **Analytics**: User behavior tracking



## 👨‍💻 Author
**Siddhesh Neharkar - Frontend Developer**


<div align="center">
Built with ❤️ using React, Redux, and Tailwind CSS

⭐ Star this repo if you found it helpful!

</div>