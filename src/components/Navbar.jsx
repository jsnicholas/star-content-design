function Navbar() {
  return (
    <div className="navbar bg-primary place-content-around">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg text-neutral font-serif">
          star content design
        </a>
      </div>

      <div className="flex-end hidden md:inline">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#services" className="text-neutral font-body">Services</a>
          </li>
          <li>
            <a href="#contact" className="rounded-full bg-neutral font-serif">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex-end md:hidden">
        <ul className="menu menu-horizontal">
          <li>
            <details>
              <summary className="text-neutral">Menu</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
