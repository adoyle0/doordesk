import uvicorn
import multiprocessing

if __name__ == "__main__":
    multiprocessing.freeze_support()
    uvicorn.run('src.dennis:api', host="127.0.0.1", port=9696, reload=True)
