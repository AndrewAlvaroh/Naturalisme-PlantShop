import React from 'react'

function FormCheckout() {
    return (
        <div>

            <div className="bg-gray-100 p-5 rounded-md">
                    <h1 className="text-center md:text-left text-xl font-semibold">Detail Tagihan</h1> 
                    <br /><br />

                    <form action="#">              
                    <div className="md:flex flex-row md:space-x-4 w-full ">
                    <div className="mb-3  w-full ">
                        <label className="font-semibold text-gray-600 py-2">Nama Penerima <abbr title="required" className="text-red-600">*</abbr></label>
                        <input required="required" type="text" name="nama" id="nama" className="appearance-none block w-full  border rounded-lg h-10 px-4"  />
                      
                    </div>
                    <div className="mb-3 w-full ">
                        <label className="font-semibold text-gray-600 py-2">No. Handphone <abbr title="required" className="text-red-600">*</abbr></label>
                        <input required="required" type="number" name="nama" id="nama" className="appearance-none block w-full  border focus-within:border-red-200 rounded-lg h-10 px-4"  />
                        
                    </div>
                    </div>

                    <div className="w-full mb-4">
                        <label className="font-semibold text-gray-600 py-2 block"> Provinsi <abbr title="required" className="text-red-600">*</abbr></label>
                        <select name="provinsi" id="#" className="w-full py-2 px-3">
                            <option value="#">Pilih Provinsi</option>
                            <option value="female">DKI Jakarta</option>
                            <option value="female">Bogor</option>
                            <option value="female">Depok</option>
                            <option value="female">Bekasi</option>
                            <option value="female">Tangerang</option>
                        </select>
                    </div>

                    <div className="w-full mb-4">
                        <label className="font-semibold text-gray-600 py-2 block"> Kota / Kab<abbr title="required" className="text-red-600">*</abbr></label>
                        <select name="provinsi" id="#" className="w-full py-2 px-3">
                            <option value="#">Pilih Kota</option>
                            <option value="female">Jakarta Pusat</option>
                            <option value="female">Jakarta Timur</option>
                            <option value="female">Jakarta Barat</option>
                            <option value="female">Jakarta Utara</option>
                            <option value="female">Jakarta Selatan</option>
                        </select>
                    </div>

                    <div className="flex gap-6">
                    <div className="w-2/3 mb-4">
                        <label className="font-semibold text-gray-600 py-2 block"> Kecamatan<abbr title="required" className="text-red-600">*</abbr></label>
                        <select name="provinsi" id="#" className="w-full py-2 px-3">
                            <option value="#">Pilih Kecamatan</option>
                            <option value="female">Kalideres 1</option>
                            <option value="female">Kalideres 123</option>
                            <option value="female">Kalideres 21</option>
                            <option value="female">Kalideres 3</option>
                            <option value="female">Kalideres 7</option>
                        </select>
                    </div>

                    <div className="w-1/3">
                    <label className="font-semibold text-gray-600 py-2 block"> Kode Pos<abbr title="required" className="text-red-600">*</abbr></label>
                    <input required="required" type="number" name="nama" id="nama" className="appearance-none block w-full  border focus:border-blue-400 rounded-lg h-10 px-4"  />
                    </div>
                    </div>

                    <div className="flex-auto w-full mb-1 py-2">
                    <label className="font-semibold text-gray-600 py-2">Alamat</label>
                    <textarea  placeholder="Nama Jalan, nomor rumah Rt/Rw" spellCheck="false" defaultValue={""} required name="message" id className=" h-20 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4" />
                  
                    </div>
                    </form>
                    </div> 
           
        </div>
    )
}

export default FormCheckout
