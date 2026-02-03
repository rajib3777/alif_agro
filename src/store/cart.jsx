import React from "react";

const CartCtx = React.createContext(null);

function loadCart() {
  try {
    const raw = localStorage.getItem("alif_cart");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = React.useState(loadCart);

  React.useEffect(() => {
    localStorage.setItem("alif_cart", JSON.stringify(items));
  }, [items]);

  const add = (product, qty = 1) => {
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === product.id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const remove = (id) => setItems((prev) => prev.filter((x) => x.id !== id));
  const setQty = (id, qty) => setItems((prev) => prev.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x)));
  const clear = () => setItems([]);

  const subtotal = items.reduce((sum, x) => sum + x.price * x.qty, 0);

  const value = React.useMemo(() => ({ items, add, remove, setQty, clear, subtotal }), [items, subtotal]);

  return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const ctx = React.useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}