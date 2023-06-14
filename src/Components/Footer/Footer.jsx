import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="py-6 dark:bg-slate-300 dark:text-gray-700">
	<div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div className="grid grid-cols-12">
			<div className="pb-6 col-span-full md:pb-0 md:col-span-6">
				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center  ">
                    <Link to="/" title="LinGo" className="inline-flex items-center w-32 ">
                     <img src="https://i.ibb.co/R0jgPCq/image-1-removebg-preview.png" alt="" />
                    </Link>
					</div>
				</a>
                <p className="text-slate-500"> Discover free online language courses at Alison. Learn a new language online, or refresh your memory on one you know,
                 across a wide range of languages.
                                             </p>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
					<li>
						<Link to ='/'><p className="hover:dark:text-violet-400 text-slate-400">Home</p> </Link>
					</li>
					<li>
                    <Link to ='/classes'><p className="hover:dark:text-violet-400 text-slate-400">Classes</p> </Link>
					</li>
					
					
				</ul>
			</div>
			<div className="col-span-6 text-center md:text-left md:col-span-3">
				<p className="pb-1 text-lg font-medium">Category</p>
				<ul>
                <li>
                    <Link to ='/instractors'><p className="hover:dark:text-violet-400 text-slate-400">Instructor</p> </Link>
					</li>
					<li>
                    <Link to ='/dashboard'><p className="hover:dark:text-violet-400 text-slate-400">DashBoard</p> </Link>
					</li>
					
				</ul>
			</div>
		</div>
		<div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2023 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-blue-400 dark:text-gray-900">
                <FaFacebook></FaFacebook>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-blue-400 dark:text-gray-900">
					<FaTwitter></FaTwitter>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-blue-400 dark:text-gray-900">
					<FaGithub></FaGithub>
				</a>
			</div>
		</div>
	</div>
</footer>
        </div>
    );
};

export default Footer;