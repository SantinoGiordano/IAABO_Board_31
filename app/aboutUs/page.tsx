export default function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[60vh] bg-[url('/sicsDriveToTheBasket.avif')] bg-center bg-cover flex items-center justify-center md:bg-fixed"></section>

      {/* MAIN BACKGROUND AND CARD */}
      <div className=" min-h-screen flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl">
          <div className="bg-white text-gray-900 shadow-2xl p-8 space-y-10">
            {/* PAGE HEADING */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                About Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                <p>
                  The Western Massachusetts Board of Approved Basketball
                  Officials&nbsp;is affiliated with the International
                  Association of Approved Basketball Officials as Board No. 31,
                  and has jurisdiction over Hampden County, the geographic area
                  assigned by IAABO. During the high school season, our
                  members&nbsp;serve&nbsp;the boys and girls programs of
                  the&nbsp;Pioneer Valley Interscholastic Athletic Conference,
                  which has 30 schools in the county, all members of the
                  Massachusetts Interscholastic Athletic Association, the
                  governing body of athletics in the state.
                </p>
                <br />
                <p>
                  Our&nbsp;members also&nbsp;officiate youth, AAU, NCAA men and
                  women, and adult leagues throughout Western Massachusetts and
                  beyond. Past members of Board 31 have gone on to work&nbsp;the
                  NCAA Division I men’s tournament and NBA G League.
                </p>
              </p>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}
