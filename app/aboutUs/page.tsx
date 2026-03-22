export default function AboutUs() {
  return (
    <>
      <section className="relative h-[60vh] bg-[url('/whiteAndRedDrive.jpg')] bg-center bg-cover flex items-center justify-center md:bg-fixed"></section>

      <div className=" min-h-screen flex justify-center px-4 py-16">
        <div className="w-full max-w-4xl">
          <div className="bg-white text-gray-900 shadow-2xl p-8 space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-red-700">
                About Us
              </h2>
              <div className="text-gray-600 text-lg leading-relaxed">
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
              </div>
            </div>

            {/* Second option for the map, if we want to do something more custom than the google maps embed: */}
            {/* <img src="/westernmassMap.jpg" alt="Board 31 Group Photo" className="w-full rounded-lg shadow-lg" /> */}

            <div className="w-full rounded-lg overflow-hidden shadow-lg hover:scale-[1.01] transition">
              <iframe
                src="https://www.google.com/maps?q=Hampden+County+Massachusetts&output=embed"
                className="w-full h-[400px] md:h-[500px] border-0"
                loading="lazy"
              ></iframe>
            </div>
            <h2 className="text-3xl font-bold text-red-700 relative inline-block group">
              Our Boards Purpose
              <span className="block h-1 bg-red-600 mt-2 w-0 group-hover:w-full transition-all duration-500"></span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                To unite in membership all qualified basketball officials in
                this geographic area and to promote good fellowship and
                cooperation among the board.
              </li>
              <li>
                To establish and maintain the highest ideals of sportsmanship in
                connection with the game.
              </li>
              <li>
                To provide for the training of new officials and to develop
                among all members a responsibility for knowledge of the rules
                and conduct of the game as published and adopted by IAABO.
              </li>
              <li>
                To encourage each member to enforce the rules of the game both
                in spirit and intent.
              </li>
            </ul>
            <h2 className="text-3xl font-bold text-red-700 relative inline-block group">
              Executive Members
              <span className="block h-1 bg-red-600 mt-2 w-0 group-hover:w-full transition-all duration-500"></span>
            </h2>
            <ul>
              <li>
                Odete Tome-Wells, President — 413-210-5976 |
                odetewells@gmail.com
              </li>
              <li>Luis Rodriguez, President-Elect</li>
              <li>
                Jeff Rivet, Secretary/Treasurer — 413-575-2006 |{" "}
                <a id="lnkEmail" href="mailto:jeffreyjrivet@hotmail.com">
                  jeffreyjrivet@hotmail.com
                </a>
              </li>
              <li>
                Owen Shanahan, Rules Interpreter/Training Chair — 413-330-6949 |
                oshanahan58@comcast.net
              </li>
              <li>Chris Brown, Esq., Parliamentarian</li>
              <li>Scott Addison</li>
              <li>Christina Zazzaro</li>
              <li>Joe Zazzaro</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
