import uvicorn
import multiprocessing

if __name__ == "__main__":
    multiprocessing.freeze_support()
    uvicorn.run('src.dennis:api', host='0.0.0.0', port=9696, reload=False)
