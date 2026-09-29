export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-heading font-bold mb-3">Digital Chautari</p>
          <p className="text-white/60 text-[14px]">
            A creative technology company in Kathmandu, Nepal — digital marketing, content
            creation, and health-tech software.
          </p>
        </div>
        <div>
          <p className="font-heading font-semibold text-sm mb-3">Company</p>
          <ul className="space-y-2 text-white/60 text-[14px]">
            <li>About</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold text-sm mb-3">Services</p>
          <ul className="space-y-2 text-white/60 text-[14px]">
            <li>Digital Marketing</li>
            <li>Content Creation</li>
            <li>Software Development</li>
          </ul>
        </div>
        <div>
          <p className="font-heading font-semibold text-sm mb-3">Legal</p>
          <ul className="space-y-2 text-white/60 text-[14px]">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-border mt-10 pt-6 text-center text-white/40 text-[12px]">
        © {new Date().getFullYear()} Digital Chautari. All rights reserved.
      </div>
    </footer>
  );
}
