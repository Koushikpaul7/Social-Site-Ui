import React from 'react';
import './post.css'
import image1 from '../../Images/cardpic.png'
import image2 from '../../Images/cardpic.png'
const Posts = () => {
    return (
        <div className='container mt-3 '>
            <div className='row '>
                <div className='col-md-8 card'>
                   <img className='img-fluid pic' src={image1} alt="" />
                <p className='mt-2'>✍️ Article</p>
               <div className='d-flex justify-content-between'>
               <h4 className='col-md-10'>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
               <h4>...</h4>
               </div>
               <p className='sub-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
               <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                <img className='user-img' src={image2} alt="" />
                <h5>Kartik Karmakar</h5>
                </div>
                <div className='d-flex align-items-center'>
                <svg className='eye-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
                <p className='mt-3'>1.4k views</p>
                <svg className='share' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM320 96C284.7 96 256 124.7 256 160C256 162.5 256.1 164.9 256.4 167.3L174.5 212C162.8 199.7 146.3 192 128 192C92.65 192 64 220.7 64 256C64 291.3 92.65 320 128 320C146.3 320 162.8 312.3 174.5 299.1L256.4 344.7C256.1 347.1 256 349.5 256 352C256 387.3 284.7 416 320 416C355.3 416 384 387.3 384 352C384 316.7 355.3 288 320 288C304.6 288 290.5 293.4 279.4 302.5L194.1 256L279.4 209.5C290.5 218.6 304.6 224 320 224C355.3 224 384 195.3 384 160C384 124.7 355.3 96 320 96V96z"/></svg>
                </div>
               </div>
                </div>
                
                <div className='col-md-4'>
                    <div className='d-flex justify-content-around '>
                   <p className='location-text'> <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg> Noida, India</p>
                   <p><svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/></svg></p>
                    </div>
                </div>
                <div className='col-md-8 card mt-4'>
                   <img className='card-img-top pic' src={image1} alt="" />
                <p className='mt-2'>🔬️ Education</p>
               <div className='d-flex justify-content-between'>
               <h4 className='col-md-10'>Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
               <h4>...</h4>
               </div>
               <p className='sub-text'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
               <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                <img className='user-img' src={image2} alt="" />
                <h5>Sara West</h5>
                </div>
                <div className='d-flex align-items-center'>
                <svg className='eye-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
                <p className='mt-3'>1.4k views</p>
                <svg className='share' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM320 96C284.7 96 256 124.7 256 160C256 162.5 256.1 164.9 256.4 167.3L174.5 212C162.8 199.7 146.3 192 128 192C92.65 192 64 220.7 64 256C64 291.3 92.65 320 128 320C146.3 320 162.8 312.3 174.5 299.1L256.4 344.7C256.1 347.1 256 349.5 256 352C256 387.3 284.7 416 320 416C355.3 416 384 387.3 384 352C384 316.7 355.3 288 320 288C304.6 288 290.5 293.4 279.4 302.5L194.1 256L279.4 209.5C290.5 218.6 304.6 224 320 224C355.3 224 384 195.3 384 160C384 124.7 355.3 96 320 96V96z"/></svg>
                </div>
               </div>
                </div>
                
                <div className='col-md-8 card mt-4'>
                   <img className='card-img-top pic' src={image1} alt="" />
                <p className='mt-2 fw-bold'>🗓️ Meetup</p>
               <div className='d-flex justify-content-between'>
               <h4 className='col-md-10'>Finance & Investment Elite Social Mixer @Lujiazui</h4>
               <h4>...</h4>
               </div>
              <div className='row'>
                <div className='d-flex'>
                <div className='col-md-4 d-flex align-item-center'>
                <svg className='cal-icon mt-1 me-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg>
                <p>Fri, 12 Oct, 2018</p>
                    </div>
                    <div className='col-md-8'>
                    <p className='location-text'> <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg> Ahmedabad, India</p>
                    </div>
                  </div>
                  <button className='rounded bg-white btn-text fw-bold py-2 mb-2'>Visit website</button>
                </div>
               <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                <img className='user-img' src={image2} alt="" />
                <h5>Sara West</h5>
                </div>
                <div className='d-flex align-items-center'>
                <svg className='eye-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
                <p className='mt-3'>1.4k views</p>
                <svg className='share' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM320 96C284.7 96 256 124.7 256 160C256 162.5 256.1 164.9 256.4 167.3L174.5 212C162.8 199.7 146.3 192 128 192C92.65 192 64 220.7 64 256C64 291.3 92.65 320 128 320C146.3 320 162.8 312.3 174.5 299.1L256.4 344.7C256.1 347.1 256 349.5 256 352C256 387.3 284.7 416 320 416C355.3 416 384 387.3 384 352C384 316.7 355.3 288 320 288C304.6 288 290.5 293.4 279.4 302.5L194.1 256L279.4 209.5C290.5 218.6 304.6 224 320 224C355.3 224 384 195.3 384 160C384 124.7 355.3 96 320 96V96z"/></svg>
                </div>
               </div>

                </div>


                <div className='col-md-8 card mt-4 mb-5'>
                <p className='mt-2 fw-bold'>💼️ Job</p>
               <div className='d-flex justify-content-between'>
               <h4 className='col-md-10'>Software Developer</h4>
               <h4>...</h4>
               </div>
              <div className='row'>
                <div className='d-flex'>
                <div className='col-md-6 d-flex align-item-center'>
                <svg className='cal-icon mt-1 me-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/></svg>
                <p>Innovaccer Analytics Private Ltd.</p>
                    </div>
                    <div className='col-md-6'>
                    <p className='location-text'> <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg> Noida, India</p>
                    </div>
                  </div>
                  <button className='rounded bg-white btn-text-2 fw-bold py-2 mb-2'>Apply on TimesJobs</button>
                </div>
               <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                <img className='user-img' src={image2} alt="" />
                <h5>Sara West</h5>
                </div>
                <div className='d-flex align-items-center'>
                <svg className='eye-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
                <p className='mt-3'>1.4k views</p>
                <svg className='share' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 512"><path d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM320 96C284.7 96 256 124.7 256 160C256 162.5 256.1 164.9 256.4 167.3L174.5 212C162.8 199.7 146.3 192 128 192C92.65 192 64 220.7 64 256C64 291.3 92.65 320 128 320C146.3 320 162.8 312.3 174.5 299.1L256.4 344.7C256.1 347.1 256 349.5 256 352C256 387.3 284.7 416 320 416C355.3 416 384 387.3 384 352C384 316.7 355.3 288 320 288C304.6 288 290.5 293.4 279.4 302.5L194.1 256L279.4 209.5C290.5 218.6 304.6 224 320 224C355.3 224 384 195.3 384 160C384 124.7 355.3 96 320 96V96z"/></svg>
                </div>
               </div>

                </div>

            </div>
        </div>
    );
};

export default Posts;