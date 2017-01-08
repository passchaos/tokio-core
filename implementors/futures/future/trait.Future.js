(function() {var implementors = {};
implementors["tokio_core"] = ["impl&lt;R, W&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.Copy.html' title='tokio_core::io::Copy'>Copy</a>&lt;R, W&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl&lt;A&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.Flush.html' title='tokio_core::io::Flush'>Flush</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>","impl&lt;A, T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.ReadExact.html' title='tokio_core::io::ReadExact'>ReadExact</a>&lt;A, T&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl&lt;A&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.ReadToEnd.html' title='tokio_core::io::ReadToEnd'>ReadToEnd</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>","impl&lt;R, T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.Read.html' title='tokio_core::io::Read'>Read</a>&lt;R, T&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl&lt;A&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.ReadUntil.html' title='tokio_core::io::ReadUntil'>ReadUntil</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a></span>","impl&lt;A, T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/io/struct.WriteAll.html' title='tokio_core::io::WriteAll'>WriteAll</a>&lt;A, T&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/net/struct.TcpStreamNew.html' title='tokio_core::net::TcpStreamNew'>TcpStreamNew</a>","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/net/struct.SendDgram.html' title='tokio_core::net::SendDgram'>SendDgram</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/net/struct.RecvDgram.html' title='tokio_core::net::RecvDgram'>RecvDgram</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt;</span>","impl <a class='trait' href='https://docs.rs/futures/0.1/futures/future/trait.Future.html' title='futures::future::Future'>Future</a> for <a class='struct' href='tokio_core/reactor/struct.Timeout.html' title='tokio_core::reactor::Timeout'>Timeout</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()