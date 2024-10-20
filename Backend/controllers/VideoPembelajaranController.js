import VideoPembelajaran from "../models/VideoPembelajaranModel.js";

// Mendapatkan semua video pembelajaran
export const getVideoPembelajaran = async (req, res) => {
    try {
        const response = await VideoPembelajaran.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Mendapatkan video pembelajaran berdasarkan id_video
export const getVideoPembelajaranByid_Video = async (req, res) => {
    try {
        const response = await VideoPembelajaran.findOne({
            where: {
                id_video: req.params.id_video 
            }
        });
        
        if (!response) {
            return res.status(404).json({ msg: "Video Pembelajaran not found" });
        }

        res.status(200).json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Membuat video pembelajaran baru
export const createVideoPembelajaran = async (req, res) => {
    try {
        await VideoPembelajaran.create(req.body);
        res.status(201).json({ msg: "Video Pembelajaran Created" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Memperbarui video pembelajaran
export const updateVideoPembelajaran = async (req, res) => {
    try {
        const [updated] = await VideoPembelajaran.update(req.body, {
            where: {
                id_video: req.params.id_video
            }
        });

        if (!updated) {
            return res.status(404).json({ msg: "Video Pembelajaran not found" });
        }

        res.status(200).json({ msg: "Video Pembelajaran Updated" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// Menghapus video pembelajaran
export const deleteVideoPembelajaran = async (req, res) => {
    try {
        const deleted = await VideoPembelajaran.destroy({
            where: {
                id_video: req.params.id_video
            }
        });

        if (!deleted) {
            return res.status(404).json({ msg: "Video Pembelajaran not found" });
        }

        res.status(200).json({ msg: "Video Pembelajaran Deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};